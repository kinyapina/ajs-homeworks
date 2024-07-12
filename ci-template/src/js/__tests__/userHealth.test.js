import { user } from '../userHealth';
import checkUserHealth from '../userHealth';

test('userHealth: 90', () => {
  const result = checkUserHealth(user.health);
  expect(result).toBe('healthy');
});