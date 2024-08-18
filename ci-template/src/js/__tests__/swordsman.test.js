import Swordsman from '../types/swordsman';

test('Объект создан корректно', () => {
  const swordsman = new Swordsman('Swordsman');
  const correctObject = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(swordsman).toEqual(correctObject);
})