import Signin from '@src/Pages/Auth/Signin';
import Home from '@src/Pages/Home';

export const ROUTER_PATHS = {
    ROOT: '/',
    SIGNIN: '/signin',
};

export const routes = [
    { path: ROUTER_PATHS.ROOT, exact: true, main: Home, menuId: '-99' },
    { path: ROUTER_PATHS.SIGNIN, exact: true, main: Signin, menuId: '1' },
];
