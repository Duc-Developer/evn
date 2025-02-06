import './App.css';
import { observer } from 'mobx-react-lite';
import evnIconSrc from '@assets/icons/evn.svg';

import commonStore from '@src/Stores/commonStore';

const App = observer(() => {
    const store = new commonStore();

    return (
        <>
            <img src={evnIconSrc} width={232} height={232} alt="logo" />
            <h1 className="text-blue-700">{store.appName}</h1>
            <p className="descriptions">My app based on react and vite</p>
            <ul className="packages">
                <li>axios</li>
                <li>mobx</li>
                <li>i18next</li>
            </ul>
        </>
    );
});

export default App;
