import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: Number(process.env.VITE_REACT_APP_PORT) || 3000,
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, '/src'),
            '@public': path.resolve(__dirname, '/public'),
            '@components': path.resolve(__dirname, '/src/Components'),
            '@stores': path.resolve(__dirname, '/src/Stores'),
            '@services': path.resolve(__dirname, '/src/Services'),
            '@utilities': path.resolve(__dirname, '/src/Utilities'),
            '@assets': path.resolve(__dirname, '/src/assets'),
            '@hooks': path.resolve(__dirname, '/src/Hooks'),
            '@constants': path.resolve(__dirname, '/src/Constants'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    plugins: [
        react(),
        tailwindcss(),
        {
            name: 'disable-import-analysis',
            enforce: 'pre',
            apply: 'build',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url?.includes('plugin=vite:import-analysis')) {
                        res.statusCode = 404;
                        res.end();
                    } else {
                        next();
                    }
                });
            },
        },
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('lodash')) {
                            return 'lodash';
                        }
                        if (id.includes('@tanstack/react-query')) {
                            return 'react-query';
                        }
                        if (id.includes('mobx')) {
                            return 'mobx';
                        }
                        if (id.includes('axios')) {
                            return 'axios';
                        }
                        if (id.includes('i18next')) {
                            return 'i18next';
                        }
                        if (id.includes('dayjs')) {
                            return 'dayjs';
                        }
                        return 'vendor';
                    }
                },
            },
        },
    },
});
