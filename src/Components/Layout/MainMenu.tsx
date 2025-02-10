import { faSquareBinary } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';
import './MainMenu.css';

const MainMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => {
        if (path === ROUTER_PATHS.ROOT) {
            return location.pathname === path;
        }
        return location.pathname.includes(path);
    };

    const items = [
        {
            key: ROUTER_PATHS.DASHBOARD,
            label: 'Trang chủ',
            icon: <i className="pi pi-fw pi-table" />,
            className: isActive(ROUTER_PATHS.DASHBOARD) ? 'active' : '',
            onClick: () => navigate(ROUTER_PATHS.DASHBOARD),
        },
        {
            key: 'jobs',
            label: 'Công việc',
            icon: <i className="pi pi-fw pi-briefcase" />,
            className: isActive(ROUTER_PATHS.JOBS) ? 'active' : '',
            children: [
                {
                    key: ROUTER_PATHS.WORK_BASKET,
                    label: 'Giỏ công việc',
                    className: isActive(ROUTER_PATHS.WORK_BASKET) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.WORK_BASKET),
                },
                {
                    key: ROUTER_PATHS.WORK_ASSIGNMENT,
                    label: 'Quản lý phân việc',
                    className: isActive(ROUTER_PATHS.WORK_ASSIGNMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.WORK_ASSIGNMENT),
                },
                {
                    key: ROUTER_PATHS.WORK_PROGRESS,
                    label: 'Theo dõi tiến độ',
                    className: isActive(ROUTER_PATHS.WORK_PROGRESS) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.WORK_PROGRESS),
                },
            ],
        },
        {
            key: 'programs',
            label: 'Chương trình',
            icon: <FontAwesomeIcon icon={faSquareBinary} />,
            className: isActive(ROUTER_PATHS.PROGRAMS) ? 'active' : '',
            children: [
                {
                    key: ROUTER_PATHS.PROGRAMS_MANAGEMENT,
                    label: 'Quản lý chương trình',
                    className: isActive(ROUTER_PATHS.PROGRAMS_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.PROGRAMS_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.PLAN_MANAGEMENT,
                    label: 'Quản lý kế hoạch',
                    className: isActive(ROUTER_PATHS.PLAN_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.PLAN_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.COST_MANAGEMENT,
                    label: 'Quản lý chi phí, tiến độ thanh toán',
                    className: isActive(ROUTER_PATHS.COST_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.COST_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.FILE_MANAGEMENT,
                    label: 'Quản lý file tài liệu lưu trữ quy trình',
                    className: isActive(ROUTER_PATHS.FILE_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.FILE_MANAGEMENT),
                },
            ],
        },
        {
            key: 'settings',
            label: 'Cài đặt',
            icon: <i className="pi pi-fw pi-cog" />,
            className: collapsed ? 'hidden' : '',
            children: [
                {
                    key: 'setting1',
                    label: 'Setting 1',
                    children: [
                        { key: 'setting1.1', label: 'Setting 1.1' },
                        { key: 'setting1.2', label: 'Setting 1.2' },
                    ],
                },
                {
                    key: 'setting2',
                    label: 'Setting 2',
                    children: [
                        { key: 'setting2.1', label: 'Setting 2.1' },
                        { key: 'setting2.2', label: 'Setting 2.2' },
                    ],
                },
                {
                    key: 'setting3',
                    label: 'Setting 3',
                    children: [
                        { key: 'setting3.1', label: 'Setting 3.1' },
                        { key: 'setting3.2', label: 'Setting 3.2' },
                    ],
                },
                {
                    key: 'setting4',
                    label: 'Technology 4',
                    children: [
                        { key: 'setting4.1', label: 'Setting 4.1' },
                        { key: 'setting4.2', label: 'Setting 4.2' },
                    ],
                },
            ],
        },
    ];

    return (
        <div
            className={classNames(
                'main-menu relative !rounded-none h-[calc(100vh_-_3.5em)] shadow-lg',
                collapsed ? 'main-menu--label-hidden !w-16' : 'w-56',
            )}
        >
            <Menu mode="vertical" items={items} className="h-full" />
            <div
                className="absolute top-2 -right-3 py-1 bg-gray-500 text-center cursor-pointer rounded-full w-8 h-8 border-2 border-white"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? (
                    <i className="pi pi-angle-double-right text-white" style={{ fontSize: '1em' }} />
                ) : (
                    <i className="pi pi-angle-double-left text-white" style={{ fontSize: '1em' }} />
                )}
            </div>
        </div>
    );
};

export default MainMenu;
