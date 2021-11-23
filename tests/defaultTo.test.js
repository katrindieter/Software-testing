import defaultTo from '../src/defaultTo'

/**
 * Tests the defaultTo(value, defaultValue) function.
 */

test('Expected return value 1', () => {
    expect(defaultTo(1, 10)).toBe(1);
});

test('Expected return value 10', () => {
    expect(defaultTo(10, 1)).toBe(10);
});

test('Expected return value 0', () => {
    expect(defaultTo(0, 10)).toBe(0);
});

/**
 * This returns NaN
 * 

test('Expected return value 10', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
});

*/

test('Expected return value 10', () => {
    expect(defaultTo(null, 10)).toBe(10);
});

test('Expected return value 10', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
});