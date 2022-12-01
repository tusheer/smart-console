import { test, expect } from 'vitest';

test('execute a script', async () => {
    // Vitest cannot rerun this test, if content of `dist/index.js` changes
    expect(4).toBe(4);
});
