import { MegaMenu } from 'primereact/megamenu';
import { classNames } from 'primereact/utils';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';
import './MainMenu.css';

const MainMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === ROUTER_PATHS.ROOT) {
            return location.pathname === path;
        }
        return location.pathname.includes(path);
    };

    const items = [
        {
            label: 'Trang chủ',
            icon: 'pi pi-fw pi-home',
            className: classNames({ active: isActive(ROUTER_PATHS.ROOT) }),
            url: ROUTER_PATHS.ROOT,
        },
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-table',
            url: ROUTER_PATHS.DASHBOARD,
            className: classNames({
                active: isActive(ROUTER_PATHS.DASHBOARD),
            }),
        },
        {
            label: 'Công việc',
            icon: 'pi pi-fw pi-briefcase',
            className: classNames({
                active:
                    isActive(ROUTER_PATHS.JOBS) ||
                    isActive(ROUTER_PATHS.WORK_BASKET) ||
                    isActive(ROUTER_PATHS.WORK_ASSIGNMENT) ||
                    isActive(ROUTER_PATHS.WORK_PROGRESS),
            }),
            items: [
                {
                    items: [
                        {
                            label: 'Giỏ công việc',
                            url: ROUTER_PATHS.WORK_BASKET,
                            className: classNames({ active: isActive(ROUTER_PATHS.WORK_BASKET) }),
                        },
                        {
                            label: 'Quản lý phân việc',
                            url: ROUTER_PATHS.WORK_ASSIGNMENT,
                            className: classNames({ active: isActive(ROUTER_PATHS.WORK_ASSIGNMENT) }),
                        },
                        {
                            label: 'Theo dõi tiến độ',
                            url: ROUTER_PATHS.WORK_PROGRESS,
                            className: classNames({ active: isActive(ROUTER_PATHS.WORK_PROGRESS) }),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Chương trình',
            icon: 'pi pi-fw pi-briefcase',
            className: classNames({
                active:
                    isActive(ROUTER_PATHS.PROGRAMS) ||
                    isActive(ROUTER_PATHS.PROGRAMS_MANAGEMENT) ||
                    isActive(ROUTER_PATHS.COST_MANAGEMENT) ||
                    isActive(ROUTER_PATHS.FILE_MANAGEMENT) ||
                    isActive(ROUTER_PATHS.PLAN_MANAGEMENT),
            }),
            items: [
                {
                    items: [
                        {
                            label: 'Quản lý chương trình',
                            url: ROUTER_PATHS.PROGRAMS_MANAGEMENT,
                            className: classNames({ active: isActive(ROUTER_PATHS.PROGRAMS_MANAGEMENT) }),
                        },
                        {
                            label: 'Quản lý kế hoạch',
                            url: ROUTER_PATHS.PLAN_MANAGEMENT,
                            className: classNames({ active: isActive(ROUTER_PATHS.PLAN_MANAGEMENT) }),
                        },
                        {
                            label: 'Quản lý chi phí, tiến độ thanh toán',
                            url: ROUTER_PATHS.COST_MANAGEMENT,
                            className: classNames({ active: isActive(ROUTER_PATHS.COST_MANAGEMENT) }),
                        },
                        {
                            label: 'Quản lý file tài liệu lưu trữ quy trình',
                            url: ROUTER_PATHS.FILE_MANAGEMENT,
                            className: classNames({ active: isActive(ROUTER_PATHS.FILE_MANAGEMENT) }),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Cài đặt',
            icon: 'pi pi-fw pi-cog',
            className: collapsed ? 'hidden' : '',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }],
                    },
                    {
                        label: 'Setting 2',
                        items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }],
                    },
                    {
                        label: 'Setting 3',
                        items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }],
                    },
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }],
                    },
                ],
            ],
        },
    ];
    return (
        <MegaMenu
            className={classNames(
                'main-menu relative !rounded-none h-[calc(100vh_-_3.5em)] shadow-lg',
                collapsed ? 'main-menu--label-hidden !w-18' : '',
            )}
            model={items}
            orientation="vertical"
            end={
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
            }
        />
    );
};

export default MainMenu;
