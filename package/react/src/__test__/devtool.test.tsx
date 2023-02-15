import { expect, describe, it } from 'vitest';
import { act, render } from '@testing-library/react';
import SmartConsoleDevTool from '../SmartConsoleDevTool';
import Console from '../console';

describe('Render smart devtool devtool', () => {
    it('should render', async () => {
        const container = render(<SmartConsoleDevTool />);

        act(() => {
            Console.log('Hello');
            Console.log('HI');
        });

        const li = container.container.querySelector('li');

        expect(li?.textContent).toBe('logHello12:17:27 PM');

        const lastLi = container.container.querySelectorAll('li');
        expect(lastLi?.item(1).textContent).toBe('HI');
    });
});
