import { Avatar } from 'antd';
import { Input } from 'antd';
import { NavLink } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';
import MainBreadCrumb from '@components/BreadCrumb/MainBreadCrumb';
import evnIconSrc from '@assets/icons/evn.svg';

const MainHeader = () => {
    return (
        <div className="flex justify-between items-center gap-8 p-2 bg-white shadow shadow-lg">
            <NavLink className="inline-flex items-center" to={ROUTER_PATHS.ROOT}>
                <img src={evnIconSrc} alt="logo" />
                <span className="text-2xl font-bold text-blue-900 ml-2">EVN</span>
                <span className="text-2xl font-bold italic text-red-600">HCMC</span>
            </NavLink>
            <MainBreadCrumb />
            <div className="flex grow items-center justify-end gap-2">
                <div className="w-48">
                    <Input size="middle" placeholder="Tìm kiếm..." prefix={<i className="pi pi-search" />} />
                </div>
                <i className="pi pi-bell inline-block ml-8" style={{ fontSize: 20 }} />
                <div>
                    <span className="mr-2">Hi, Nguyễn Văn A</span>
                    <Avatar style={{ backgroundColor: '#2196F3', color: '#ffffff' }} size="large">
                        A
                    </Avatar>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
