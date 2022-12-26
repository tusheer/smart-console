import { expect, describe, it } from 'vitest';
import { render } from '@testing-library/react';
import SmartConsoleDevTool from '../SmartConsoleDevTool';
import Console from '../console';

describe('Render smart devtool devtool', () => {
    it.skip('should render', async () => {
        const container = render(<SmartConsoleDevTool />);
        await Console.log('Hello');
        await Console.log('HI');

        const li = container.container.querySelector('li');

        expect(li?.textContent).toBe('Hello');

        const lastLi = container.container.querySelectorAll('li');
        expect(lastLi?.item(1).textContent).toBe('HI');
    });
});
