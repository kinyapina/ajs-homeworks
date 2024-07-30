import { specialCharacter } from "../js/destruction";

test('', () => {
  const correctArray = [
    {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      description: 'Описание недоступно',
      icon: 'http://...'
    }
  ]
  expect(specialCharacter).toEqual(correctArray);
});