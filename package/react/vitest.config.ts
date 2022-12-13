/// <reference types="vitest" />

import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude, 'src/*.{test,spec}.{ts,tsx}'],
        globals: true,
        environment: 'happy-dom',
    },
    plugins: [react()],
});
