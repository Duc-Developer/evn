import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { routes } from './Routes';

const App = observer(() => {
    return (
        <Routes>
            {routes.map((route, index) => {
                const Component = route.main;
                const Layout = route.layout;
                if (Layout) {
                    return (
                        <Route
                            key={route.menuId ?? index}
                            path={route.path}
                            element={
                                <React.Suspense>
                                    <Layout>
                                        <Component />
                                    </Layout>
                                </React.Suspense>
                            }
                        />
                    );
                }
                return <Route key={route.menuId ?? index} path={route.path} element={<Component />} />;
            })}
        </Routes>
    );
});

export default App;
