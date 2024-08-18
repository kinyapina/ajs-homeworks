import Zombie from '../types/zombie';

test('Объект создан корректно', () => {
  const zombie = new Zombie('Zombie');
  const correctObject = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(zombie).toEqual(correctObject);
})