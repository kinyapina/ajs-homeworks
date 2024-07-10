import checkUserHealth from '../userHealth';

test('userHealth: 90', () => {
  const user = {
    name: 'Маг',
    health: 90,
  }
  const result = checkUserHealth(90);
  expect(result).toBe('healthy');
});