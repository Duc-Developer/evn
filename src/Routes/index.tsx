import React from 'react';
import WorkAssignment from '@src/Pages/Jobs/WorkAssignment';

const Signin = React.lazy(() => import('@pages/Auth/Signin'));
const Home = React.lazy(() => import('@pages/Home'));
const Jobs = React.lazy(() => import('@pages/Jobs'));
const WorkBasket = React.lazy(() => import('@pages/Jobs/WorkBasket'));
const Dashboard = React.lazy(() => import('@pages/Dashboard/index'));
const Programs = React.lazy(() => import('@pages/Programs/index'));
const ProgramsManagement = React.lazy(() => import('@src/Pages/Programs/ProgramManagement'));
const PlanManagement = React.lazy(() => import('@src/Pages/Programs/PlanManagement'));
const CostManagement = React.lazy(() => import('@src/Pages/Programs/CostManagement'));
const FileManagement = React.lazy(() => import('@src/Pages/Programs/FileManagement'));
const Systems = React.lazy(() => import('@src/Pages/System/index'));
const AccountManagement = React.lazy(() => import('@src/Pages/System/AccountManagement'));
const RoleManagement = React.lazy(() => import('@src/Pages/System/RoleManagement'));
const SynchronizedListManagement = React.lazy(() => import('@src/Pages/System/SynchronizedListManagement'));
const UnitManagement = React.lazy(() => import('@src/Pages/System/UnitManagement'));
const LabelingManagement = React.lazy(() => import('@src/Pages/System/LabelingManagement'));
const SyncConfiguration = React.lazy(() => import('@src/Pages/System/SyncConfiguration'));

export const ROUTER_PATHS = {
    ROOT: '/',
    SIGNIN: '/signin',
    DASHBOARD: '/dashboard',
    JOBS: '/jobs',
    WORK_BASKET: '/jobs/work-basket',
    WORK_ASSIGNMENT: '/jobs/assignment',
    WORK_PROGRESS: '/jobs/progress',
    PROGRAMS: '/programs',
    PROGRAMS_MANAGEMENT: '/programs/program-management',
    PLAN_MANAGEMENT: '/programs/plan-management',
    COST_MANAGEMENT: '/programs/cost-management',
    FILE_MANAGEMENT: '/programs/file-management',
    SYSTEMS: '/systems',
    ACCOUNT_MANAGEMENT: '/systems/account-management',
    ROLE_MANAGEMENT: '/systems/role-management',
    SYNCHRONIZED_LIST_MANAGEMENT: '/systems/synchronized-list-management',
    UNIT_MANAGEMENT: '/systems/unit-management',
    LABELING_MANAGEMENT: '/systems/labeling-management',
    SYNC_CONFIGURATION: '/systems/sync-configuration',
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
        main: () => <WorkAssignment />,
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
    {
        path: ROUTER_PATHS.DASHBOARD,
        exact: true,
        main: Dashboard,
        menuId: '3',
        layout: LAYOUT.DEFAULT,
        title: 'Dashboard',
    },
    {
        path: ROUTER_PATHS.PROGRAMS,
        exact: true,
        main: Programs,
        menuId: '4',
        layout: LAYOUT.DEFAULT,
        title: 'Chương trình',
    },
    {
        path: ROUTER_PATHS.PROGRAMS_MANAGEMENT,
        exact: true,
        main: ProgramsManagement,
        menuId: '4.1',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý chương trình',
    },
    {
        path: ROUTER_PATHS.PLAN_MANAGEMENT,
        exact: true,
        main: PlanManagement,
        menuId: '4.2',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý kế hoạch',
    },
    {
        path: ROUTER_PATHS.COST_MANAGEMENT,
        exact: true,
        main: CostManagement,
        menuId: '4.3',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý chi phí, tiến độ thanh toán',
    },
    {
        path: ROUTER_PATHS.FILE_MANAGEMENT,
        exact: true,
        main: FileManagement,
        menuId: '4.4',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý file tài liệu lưu trữ quy trình',
    },
    {
        path: ROUTER_PATHS.SYSTEMS,
        exact: true,
        main: Systems,
        menuId: '5',
        layout: LAYOUT.DEFAULT,
        title: 'Hệ thống',
    },
    {
        path: ROUTER_PATHS.ACCOUNT_MANAGEMENT,
        exact: true,
        main: AccountManagement,
        menuId: '5.1',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý tài khoản',
    },
    {
        path: ROUTER_PATHS.ROLE_MANAGEMENT,
        exact: true,
        main: RoleManagement,
        menuId: '5.2',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý vai trò',
    },
    {
        path: ROUTER_PATHS.SYNCHRONIZED_LIST_MANAGEMENT,
        exact: true,
        main: SynchronizedListManagement,
        menuId: '5.3',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý danh mục đồng bộ',
    },
    {
        path: ROUTER_PATHS.UNIT_MANAGEMENT,
        exact: true,
        main: UnitManagement,
        menuId: '5.4',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý đơn vị',
    },
    {
        path: ROUTER_PATHS.LABELING_MANAGEMENT,
        exact: true,
        main: LabelingManagement,
        menuId: '5.5',
        layout: LAYOUT.DEFAULT,
        title: 'Quản lý gán nhãn',
    },
    {
        path: ROUTER_PATHS.SYNC_CONFIGURATION,
        exact: true,
        main: SyncConfiguration,
        menuId: '5.6',
        layout: LAYOUT.DEFAULT,
        title: 'Cấu hình đồng bộ',
    },
];
