import checkUserHealth from '../userHealth';

test('userHealth: 80', () => {
  const result = checkUserHealth(80);
  expect(result).toBe('healthy');
});

test('userHealth: 51', () => {
  const result = checkUserHealth(51);
  expect(result).toBe('wounded');
});

test('userHealth: 9', () => {
  const result = checkUserHealth(9);
  expect(result).toBe('critical');
});

test('userHealth: NaN', () => {
  const result = checkUserHealth('вто');
  expect(result).toBe('this is not a number');
});

test('userHealth: less than 0', () => {
  const result = checkUserHealth('-25');
  expect(result).toBe('this is not a number');
});