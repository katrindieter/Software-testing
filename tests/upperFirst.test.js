import upperFirst from '../src/upperFirst'

/**
 * Tests the of upperFirst(string) function.
 */

test('Expected return value "TEST"', () => {
    expect(upperFirst('TEST')).toBe('TEST');
});

test('Expected return value "Test"', () => {
    expect(upperFirst('test')).toBe('Test');
});

test('Expected return value "TEST"', () => {
    expect(upperFirst('tEST')).toBe('TEST');
});

test('Expected return value "Test"', () => {
    expect(upperFirst('Test')).toBe('Test');
});

test('Expected return value "Test_case"', () => {
    expect(upperFirst('test_case')).toBe('Test_case');
});

