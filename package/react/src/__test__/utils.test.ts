import { expect, describe, it } from 'vitest';
import { getDataType } from '../utils';

describe('getLogType test case handle', () => {
    it('Object type shoud pass', () => {
        expect(getDataType({})).toBe('object');
    });

    it('Array type should pass', () => {
        expect(getDataType([])).toBe('array');
    });

    it('Number type should pass', () => {
        expect(getDataType(33)).toBe('number');
    });

    it('String type pass', () => {
        expect(getDataType('test')).toBe('string');
    });

    it('Json type pass', () => {
        expect(getDataType(JSON.stringify({ new: 'hi' }))).toBe('json');
    });
});
