import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import MainBreadCrumb from '@components/BreadCrumb/MainBreadCrumb';
import evnIconSrc from '@assets/icons/evn.svg';

const MainHeader = () => {
    return (
        <div className="flex justify-between items-center p-2 bg-white shadow shadow-lg">
            <div className="inline-flex items-center">
                <img src={evnIconSrc} alt="logo" />
                <span className="text-2xl font-bold text-blue-900 ml-2">EVN</span>
                <span className="text-2xl font-bold italic text-red-600">HCMC</span>
            </div>
            <MainBreadCrumb />
            <div className="flex grow items-center justify-end gap-2">
                <InputText className="h-10" size={32} placeholder="Search" prefix="pi-search" />
                <i className="pi pi-bell inline-block ml-8" style={{ fontSize: 20 }} />
                <div>
                    <span className="mr-2">Hi, Nguyễn Văn A</span>
                    <Avatar
                        label="A"
                        size="normal"
                        style={{ backgroundColor: '#2196F3', color: '#ffffff' }}
                        shape="circle"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
