import { Button } from 'primereact/button';
import commonStore from '@src/Stores/commonStore';
import evnIconSrc from '@assets/icons/evn.svg';
import Footer from './Components/Footer';
import Header from './Components/Header';

const View = () => {
    const store = new commonStore();
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>{store.appName}</h1>
                <img src={evnIconSrc} alt="logo" />
                <Button label="Check" icon="pi pi-check" />
            </div>
            <Footer />
        </>
    );
};

export default View;
