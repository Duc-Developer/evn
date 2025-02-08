import React from 'react';
import Signin from '@src/Pages/Auth/Signin';
import Home from '@src/Pages/Home';

export const ROUTER_PATHS = {
    ROOT: '/',
    SIGNIN: '/signin',
};

const LAYOUT = {
    DEFAULT: React.lazy(() => import('@components/Layout')),
    NONE: ({ children }: { children: React.ReactNode }) => <>{children}</>,
};
export const routes = [
    { path: ROUTER_PATHS.ROOT, exact: true, main: Home, menuId: '-99', layout: LAYOUT.DEFAULT },
    { path: ROUTER_PATHS.SIGNIN, exact: true, main: Signin, menuId: '1', layout: LAYOUT.NONE },
];
