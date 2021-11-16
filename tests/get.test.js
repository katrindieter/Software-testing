import get from '../src/get'

/**
 * Tests the of get(object, path, defaultValue) function.
 * 
 */

const object1 = { 'a': [{ 'b': {'c': 3} }] };
const object2 = { 'test': [ { 'a': {'a1': 1, 'a2': 2} }, {'b': {'b1': 3, 'b2': 4}} ] };

test('Expected return value 3', () => {
    expect(get(object1, 'a[0].b.c')).toBe(3);
});

test('Expected return value 3', () => {
    expect(get(object1, ['a', '0', 'b', 'c'])).toBe(3);
});

test('Expected return value "default"', () => {
    expect(get(object1, 'a.b.c', 'default')).toBe('default');
});

test('Expected return value 4', () => {
    expect(get(object2, 'test[1].b.b2')).toBe(4);
});

test('Expected return value 2', () => {
    expect(get(object2, ['test', '0', 'a', 'a2'])).toBe(2);
});

test('Expected return value "test"', () => {
    expect(get(object2, ['test', '1', 'c'], 'test')).toBe('test');
});
