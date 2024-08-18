import Bowman from '../types/bowman';

test('Объект создан корректно', () => {
  const bowman = new Bowman('Bowman');
  const correctObject = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(bowman).toEqual(correctObject);
})