import { BreadCrumb } from 'primereact/breadcrumb';
import { classNames } from 'primereact/utils';
import { matchPath, NavLink, useLocation } from 'react-router';
import { ROUTER_PATHS, routes } from '@src/Routes';

const MainBreadCrumb = () => {
    const location = useLocation();

    const items = location.pathname
        .split('/')
        .filter(Boolean)
        .map((path, index, arr) => {
            const to = `/${arr.slice(0, index + 1).join('/')}`;
            const matchedRoute = routes.find((route) => route.path === to);
            const isActive = matchPath(location.pathname, to);
            return {
                label: matchedRoute?.title || path,
                template: () => (
                    <NavLink
                        to={to}
                        className={classNames('font-semibold', isActive ? 'text-primary' : 'text-gray-500')}
                    >
                        {matchedRoute?.title || path}
                    </NavLink>
                ),
            };
        });

    const home = { icon: 'pi pi-home', url: ROUTER_PATHS.ROOT };

    if (location.pathname === ROUTER_PATHS.ROOT) {
        return null;
    }
    return <BreadCrumb className="ml-6 h-10" model={items} home={home} />;
};

export default MainBreadCrumb;
