import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import queryClient from './Services/queryClient.ts';
import './i18n.ts';
import './index.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/tailwind-light/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    algorithm: theme.defaultAlgorithm,
                }}
            >
                <PrimeReactProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PrimeReactProvider>
            </ConfigProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
