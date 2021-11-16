import every from '../src/every'


/**
 * Tests the of every(array, predicate) function.
 */

test('Expected return value "false"', () => {
    expect(every([true, 1, 'one', null], Boolean)).toBe(false);
});

test('Expected return value "true"', () => {
    expect(every([true, 1, 'one', 2], Boolean)).toBe(true);
});

test('Expected return value "true"', () => {
    expect(every([], Boolean)).toBe(true);
});

test('Expected return value "false"', () => {
    expect(every(['test', null, 10, 'test2'], Boolean)).toBe(false);
});

test('Expected return value "false"', () => {
    expect(every([null], Boolean)).toBe(false);
});