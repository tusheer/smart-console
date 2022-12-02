import { expect, describe, it } from 'vitest';
import { render } from '@testing-library/react';
import SmartConsoleDevTool from '../SmartConsoleDevTool';

describe('Render smart devtool devtool', () => {
    it('should reder', () => {
        const devtool = render(<SmartConsoleDevTool />);
        const continer = devtool.findByTestId('container');
        expect(continer);
    });
});
