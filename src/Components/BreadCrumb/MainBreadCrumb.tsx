import { Breadcrumb } from 'antd';
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
                key: to,
                title: (
                    <NavLink
                        to={to}
                        className={isActive ? 'font-semibold text-primary' : 'font-semibold text-gray-500'}
                    >
                        {matchedRoute?.title || path}
                    </NavLink>
                ),
            };
        });

    const home = {
        key: ROUTER_PATHS.ROOT,
        title: (
            <NavLink to={ROUTER_PATHS.ROOT} className="font-semibold text-primary">
                <i className="pi pi-home" />
            </NavLink>
        ),
    };

    if (location.pathname === ROUTER_PATHS.ROOT || location.pathname === ROUTER_PATHS.DASHBOARD) {
        return null;
    }

    return <Breadcrumb items={[home, ...items]} />;
};

export default MainBreadCrumb;
