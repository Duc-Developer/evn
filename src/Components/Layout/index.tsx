import React from 'react';
import MainHeader from '@components/Layout/MainHeader';
import MainMenu from './MainMenu';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <MainHeader />
            <div className="app-body flex">
                <div className="app-menu">
                    <MainMenu />
                </div>
                <div className="app-content grow p-4 bg-gray-200">
                    <div className="app-content__overlay rounded">{children}</div>
                </div>
            </div>
        </section>
    );
};

export default Layout;
