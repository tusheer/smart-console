import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude, 'src/*.{test,spec}.{ts,tsx}'],
        globals: true,
        environment: 'jsdom',
    },
});
