import Undead from '../types/undead';

test('Объект создан корректно', () => {
  const undead = new Undead('Undead');
  const correctObject = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(undead).toEqual(correctObject);
})