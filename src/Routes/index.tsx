import React from 'react';
import Signin from '@src/Pages/Auth/Signin';
import Dashboard from '@src/Pages/Dashboard';
import Home from '@src/Pages/Home';

export const ROUTER_PATHS = {
    ROOT: '/',
    SIGNIN: '/signin',
    DASHBOARD: '/dashboard',
};

const LAYOUT = {
    DEFAULT: React.lazy(() => import('@components/Layout')),
    NONE: ({ children }: { children: React.ReactNode }) => <>{children}</>,
};
export const routes = [
    { path: ROUTER_PATHS.ROOT, exact: true, main: Home, menuId: '-99', layout: LAYOUT.DEFAULT },
    { path: ROUTER_PATHS.SIGNIN, exact: true, main: Signin, menuId: '1', layout: LAYOUT.NONE },
    { path: ROUTER_PATHS.DASHBOARD, exact: true, main: Dashboard, menuId: '2', layout: LAYOUT.DEFAULT },
];
