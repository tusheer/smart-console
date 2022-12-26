import { expect, describe, it } from 'vitest';
import { getLogType } from '../utils';

describe('getLogType test case handle', () => {
    it('Object type shoud pass', () => {
        expect(getLogType({})).toBe('object');
    });

    it('Array type should pass', () => {
        expect(getLogType([])).toBe('array');
    });

    it('Number type should pass', () => {
        expect(getLogType(33)).toBe('number');
    });

    it('String type pass', () => {
        expect(getLogType('test')).toBe('string');
    });

    it('Json type pass', () => {
        expect(getLogType(JSON.stringify({ new: 'hi' }))).toBe('json');
    });
});
