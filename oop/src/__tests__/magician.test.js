import Magician from '../types/magician';

test('Объект создан корректно', () => {
  const magician = new Magician('Magician');
  const correctObject = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(magician).toEqual(correctObject);
})