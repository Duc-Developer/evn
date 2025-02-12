import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { COLORS } from '@constants/theme.ts';
import App from './App.tsx';
import queryClient from './Services/queryClient.ts';
import viVN from 'antd/lib/locale/vi_VN';

import './i18n.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    algorithm: theme.defaultAlgorithm,
                    token: {
                        ...COLORS,
                    },
                }}
                locale={viVN}
            >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
