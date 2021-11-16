import add from '../src/add'



test('adds 1 + 2, result is 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + -2, result is  3', () => {
  expect(add(5, -2)).toBe(3);
});

test('adds 0 + 0, result is 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('adds 1.65 + 0.55, result is 2.2', () => {
  expect(add(1.65, 0.55)).toBe(2.2);
});

test('adds 100.50 + 5.25, result is 105.75', () => {
  expect(add(100.50, 5.25)).toBe(105.75);
});

test('adds 1 + -0.5, result is 0.5', () => {
  expect(add(1.55, -0.55)).toBe(1.00);
});