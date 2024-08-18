import Character from '../types/character';

test('Ошибка в name: количество символов', () => {
  const hero = new Character('Z', 'Bowman');
  expect(hero).toThrow(new Error('Количество символов в имени должно быть от 2 до 10'));
});

test('Ошибка в name: имя не должно содержать цифр', () => {
  const hero = new Character(5, 'Bowman');
  expect(hero).toThrow(new Error('Имя должно содержать только буквы'));
});

test('Ошибка в type: type не соответсвует значению из списка', () => {
  const hero = new Character('Zorro', 'Bowmane');
  expect(hero).toThrow(new Error('Значение необходимо выбрать из списка'));
});

test('Проверка повышения уровня', () => {
  const hero = new Character('Zorro', 'Bowman');
  const result = {
    name: 'Zorro',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: undefined,
    defence: undefined
  }
  expect(hero.levelUp()).toEqual(result);
});

test('Проверка повышения уровня умершего', () => {
  const hero = new Character('Zorro', 'Bowman');
  hero.health = 0;
  expect(hero.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('Проверка понижения уровня', () => {
  const hero = new Character('Zorro', 'Bowman');
  const result = {
    name: 'Zorro',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined
  }
  expect(hero.damage(20)).toEqual(result);
});

test('Проверка понижения уровня умершего', () => {
  const hero = new Character('Zorro', 'Bowman');
  hero.health = -1;
  expect(hero.damage(20)).toThrow(new Error('Уровень здоровья меньше нормы'));
});