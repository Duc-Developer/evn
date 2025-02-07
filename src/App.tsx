import './App.css';
import { observer } from 'mobx-react-lite';
import evnIconSrc from '@assets/icons/evn.svg';
import { Button } from 'primereact/button';
import commonStore from '@src/Stores/commonStore';

const App = observer(() => {
    const store = new commonStore();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={evnIconSrc} width={232} height={232} alt="logo" />
            <h1 className="text-blue-700">{store.appName}</h1>
            <Button label="Check" icon="pi pi-check" />
        </div>
    );
});

export default App;
