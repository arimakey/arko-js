import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'arko-js',
            formats: ['es', 'umd'],
            fileName: (format) => {
                if (format === 'es') return 'arko-js.js'; 
                if (format === 'umd') return 'arko-js.umd.cjs';
            },
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
