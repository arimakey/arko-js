import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve('src/index.js'), // Corrección aquí
            name: 'arko-js',
            fileName: 'arko-js',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
    plugins: [react()],
});
