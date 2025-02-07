import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { PrimeReactProvider } from 'primereact/api';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './Services/queryClient.ts';

import './index.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

import './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <App />
            </PrimeReactProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
