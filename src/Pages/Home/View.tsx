import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';
import commonStore from '@src/Stores/commonStore';
import evnIconSrc from '@assets/icons/evn.svg';
import Footer from './Components/Footer';
import Header from './Components/Header';

const View = () => {
    const store = new commonStore();
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <h1>{store.appName}</h1>
                <img src={evnIconSrc} alt="logo" />
                <Button label="Signin" icon="pi pi-check" onClick={() => navigate(ROUTER_PATHS.SIGNIN)} />
            </div>
            <Footer />
        </>
    );
};

export default View;
