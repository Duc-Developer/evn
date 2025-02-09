import { MegaMenu } from 'primereact/megamenu';
import { useNavigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';

const MainMenu = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => {
                navigate(ROUTER_PATHS.ROOT);
            },
        },
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-table',
            command: () => {
                navigate(ROUTER_PATHS.DASHBOARD);
            },
        },
        {
            label: 'Công việc',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                [
                    {
                        label: 'Giỏ công việc',
                    },
                    {
                        label: 'Quản lý phân việc',
                    },
                    {
                        label: 'Theo dõi tiến độ',
                    },
                ],
            ],
        },
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
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
        <MegaMenu className="!rounded-none h-[calc(100vh_-_3.5em)]  shadow-lg" model={items} orientation="vertical" />
    );
};

export default MainMenu;
