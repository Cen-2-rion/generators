import canIterate from '../app';

test('test with an array', () => {
  const array = [1, 2, 3, 4, 5];
  expect(canIterate(array)).toBe(true);
});

test('test with a string', () => {
  const string = 'Hello, World!';
  expect(canIterate(string)).toBe(true);
});

test('test with a number', () => {
  const number = 10;
  expect(canIterate(number)).toBe(false);
});

test('test with a boolean', () => {
  const boolean = true;
  expect(canIterate(boolean)).toBe(false);
});

test('test with a null', () => {
  const nullValue = null;
  expect(() => canIterate(nullValue)).toThrow();
});
