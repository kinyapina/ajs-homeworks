import getNewPlayer from '../index';

test('type is not a string', () => {
  const result = getNewPlayer(5, undead);
  expect(result).toBe('name is not a string');
});