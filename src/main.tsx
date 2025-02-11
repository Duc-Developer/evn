import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import queryClient from './Services/queryClient.ts';
import './i18n.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    algorithm: theme.defaultAlgorithm,
                    token: {
                        colorPrimary: '#20398B',
                        colorSuccess: '#52c41a',
                        colorWarning: '#faad14',
                        colorError: '#f5222d',
                        colorInfo: '#1890ff',
                        colorTextBase: '#333333',
                        colorBgBase: '#F5F5F5',
                    },
                }}
            >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
