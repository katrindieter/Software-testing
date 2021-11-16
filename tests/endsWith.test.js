import endsWith from '../src/endsWith'

/**
 * Tests the endsWith(string, target, position) function.
 */

test('Expected return value "true"', () => {
    expect(endsWith('test', 't')).toBe(true);
});

test('Expected return value "false"', () => {
    expect(endsWith('test', 's')).toBe(false);
});

test('Expected return value "true"', () => {
    expect(endsWith('test', 's', 3)).toBe(true);
});

test('Expected return value "true"', () => {
    expect(endsWith('test_value', 't', 1)).toBe(true);
});

test('Expected return value "false"', () => {
    expect(endsWith('test_value', 't')).toBe(false);
});