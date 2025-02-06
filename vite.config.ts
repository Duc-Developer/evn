import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: Number(process.env.VITE_REACT_APP_PORT) || 3000,
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, '/src'),
            '@public': path.resolve(__dirname, '/public')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    plugins: [
        react(),
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
        }
    ],
});
