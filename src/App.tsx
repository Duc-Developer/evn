import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router';
import './App.css';
import { routes } from './Routes';

const App = observer(() => {
    return (
        <Routes>
            {routes.map((route, index) => {
                const Component = route.main;
                return <Route key={route.menuId ?? index} path={route.path} element={<Component />} />;
            })}
        </Routes>
    );
});

export default App;
