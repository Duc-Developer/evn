import {
    faSquareBinary,
    faCircleChevronRight,
    faCircleChevronLeft,
    faHouse,
    faListCheck,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
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
    const [openKeys, setOpenKeys] = useState<string[]>([]);

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
            icon: <FontAwesomeIcon icon={faHouse} className="!text-xl" />,
            className: isActive(ROUTER_PATHS.DASHBOARD) ? 'active' : '',
            onClick: () => navigate(ROUTER_PATHS.DASHBOARD),
        },
        {
            key: 'jobs',
            label: 'Công việc',
            icon: <FontAwesomeIcon icon={faListCheck} className="!text-xl" />,
            className: isActive(ROUTER_PATHS.JOBS) ? 'active' : '',
            children: [
                {
                    key: ROUTER_PATHS.WORK_BASKET,
                    label: 'Giỏ công việc',
                    title: 'Giỏ công việc',
                    className: isActive(ROUTER_PATHS.WORK_BASKET) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.WORK_BASKET),
                },
                {
                    key: ROUTER_PATHS.WORK_ASSIGNMENT,
                    label: 'Quản lý phân việc',
                    title: 'Quản lý phân việc',
                    className: isActive(ROUTER_PATHS.WORK_ASSIGNMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.WORK_ASSIGNMENT),
                },
                {
                    key: ROUTER_PATHS.WORK_PROGRESS,
                    label: 'Theo dõi tiến độ',
                    title: 'Theo dõi tiến độ',
                    className: isActive(ROUTER_PATHS.WORK_PROGRESS) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.WORK_PROGRESS),
                },
            ],
        },
        {
            key: ROUTER_PATHS.PROGRAMS,
            label: 'Chương trình',
            icon: <FontAwesomeIcon icon={faSquareBinary} className="!text-xl" />,
            className: isActive(ROUTER_PATHS.PROGRAMS) ? 'active' : '',
            children: [
                {
                    key: ROUTER_PATHS.PROGRAMS_MANAGEMENT,
                    label: 'Quản lý chương trình',
                    title: 'Quản lý chương trình',
                    className: isActive(ROUTER_PATHS.PROGRAMS_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.PROGRAMS_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.PLAN_MANAGEMENT,
                    label: 'Quản lý kế hoạch',
                    title: 'Quản lý kế hoạch',
                    className: isActive(ROUTER_PATHS.PLAN_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.PLAN_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.COST_MANAGEMENT,
                    label: 'Quản lý chi phí, tiến độ thanh toán',
                    title: 'Quản lý chi phí, tiến độ thanh toán',
                    className: isActive(ROUTER_PATHS.COST_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.COST_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.FILE_MANAGEMENT,
                    label: 'Quản lý file tài liệu lưu trữ quy trình',
                    title: 'Quản lý file tài liệu lưu trữ quy trình',
                    className: isActive(ROUTER_PATHS.FILE_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.FILE_MANAGEMENT),
                },
            ],
        },
        {
            key: ROUTER_PATHS.SYSTEMS,
            label: 'Hệ thống',
            icon: <FontAwesomeIcon icon={faGear} />,
            className: isActive(ROUTER_PATHS.SYSTEMS) ? 'active' : '',
            children: [
                {
                    key: ROUTER_PATHS.ACCOUNT_MANAGEMENT,
                    label: 'Quản lý tài khoản',
                    title: 'Quản lý tài khoản',
                    className: isActive(ROUTER_PATHS.ACCOUNT_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.ACCOUNT_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.ROLE_MANAGEMENT,
                    label: 'Quản lý vai trò',
                    title: 'Quản lý vai trò',
                    className: isActive(ROUTER_PATHS.ROLE_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.ROLE_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.SYNCHRONIZED_LIST_MANAGEMENT,
                    label: 'Quản lý danh mục đồng bộ',
                    title: 'Quản lý danh mục đồng bộ',
                    className: isActive(ROUTER_PATHS.SYNCHRONIZED_LIST_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.SYNCHRONIZED_LIST_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.UNIT_MANAGEMENT,
                    label: 'Quản lý đơn vị',
                    title: 'Quản lý đơn vị',
                    className: isActive(ROUTER_PATHS.UNIT_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.UNIT_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.LABELING_MANAGEMENT,
                    label: 'Quản lý gán nhãn',
                    title: 'Quản lý gán nhãn',
                    className: isActive(ROUTER_PATHS.LABELING_MANAGEMENT) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.LABELING_MANAGEMENT),
                },
                {
                    key: ROUTER_PATHS.SYNC_CONFIGURATION,
                    label: 'Cấu hình đồng bộ',
                    title: 'Cấu hình đồng bộ',
                    className: isActive(ROUTER_PATHS.SYNC_CONFIGURATION) ? 'active' : '',
                    onClick: () => navigate(ROUTER_PATHS.SYNC_CONFIGURATION),
                },
            ],
        },
    ];

    return (
        <div
            className={classNames(
                'main-menu relative !rounded-none h-[calc(100vh_-_3.5em)] shadow-lg',
                collapsed ? 'main-menu--label-hidden !w-16' : 'w-64',
            )}
        >
            <Menu
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                mode="inline"
                items={items}
                inlineIndent={16}
                className="main-menu__menu h-full overflow-y-auto"
            />
            <FontAwesomeIcon
                className={
                    classNames("absolute top-3 -right-3",
                        "block aspect-square text-primary text-center cursor-pointer rounded-full text-2xl",
                        "border-2 border-secondary z-10 bg-secondary",
                    )
                }
                icon={collapsed ? faCircleChevronRight : faCircleChevronLeft}
                onClick={() => {
                    setCollapsed(!collapsed);
                    setOpenKeys([]);
                }}
            />
        </div>
    );
};

export default MainMenu;
