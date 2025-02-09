import React from 'react';

const Signin = React.lazy(() => import('@pages/Auth/Signin'));
const Home = React.lazy(() => import('@pages/Home'));
const Jobs = React.lazy(() => import('@pages/Jobs'));
const WorkBasket = React.lazy(() => import('@pages/Jobs/WorkBasket'));
const Dashboard = React.lazy(() => import('@pages/Dashboard/index'));

export const ROUTER_PATHS = {
    ROOT: '/',
    SIGNIN: '/signin',
    DASHBOARD: '/dashboard',
    JOBS: '/jobs',
    WORK_BASKET: '/jobs/work-basket',
    WORK_ASSIGNMENT: '/jobs/assignment',
    WORK_PROGRESS: '/jobs/progress',
};

const LAYOUT = {
    DEFAULT: React.lazy(() => import('@components/Layout')),
    NONE: ({ children }: { children: React.ReactNode }) => <>{children}</>,
};
export const routes = [
    { path: ROUTER_PATHS.ROOT, exact: true, main: Home, menuId: '-99', layout: LAYOUT.DEFAULT, title: 'Trang chủ' },
    { path: ROUTER_PATHS.SIGNIN, exact: true, main: Signin, menuId: '1', layout: LAYOUT.NONE, title: 'Đăng nhập' },
    { path: ROUTER_PATHS.JOBS, main: Jobs, menuId: '2', layout: LAYOUT.DEFAULT, title: 'Công việc' },
    { path: ROUTER_PATHS.WORK_BASKET, main: WorkBasket, menuId: '2.1', layout: LAYOUT.DEFAULT, title: 'Giỏ công việc' },
    {
        path: ROUTER_PATHS.WORK_ASSIGNMENT,
        main: () => <>WORK ASSIGNMENT</>,
        menuId: '2.2',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý phân việc',
    },
    {
        path: ROUTER_PATHS.WORK_PROGRESS,
        main: () => <>WORK PROGRESS</>,
        menuId: '2.3',
        layout: LAYOUT.DEFAULT,
        title: 'Theo dõi tiến độ',
    },
    { path: ROUTER_PATHS.DASHBOARD, exact: true, main: Dashboard, menuId: '3', layout: LAYOUT.DEFAULT },
];
