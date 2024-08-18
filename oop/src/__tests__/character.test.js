import Character from '../types/character';

test('Ошибка в name: количество символов', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Количество букв в имени должно быть от 2 до 10 знаков');
  expect(() => new Character('Ajjfjfjfjfjfjjfjfjf', 'Bowman')).toThrow('Количество букв в имени должно быть от 2 до 10 знаков');
  expect(() => new Character(1, 'Bowman')).toThrow('Количество букв в имени должно быть от 2 до 10 знаков');
});

test('Ошибка в type: type не соответсвует значению из списка', () => {
  expect(() => new Character('Anke', 'Fish')).toThrow('Значение необходимо выбрать из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('Проверка повышения уровня', () => {
  const hero = new Character('Hero', 'Bowman');
  hero.attack = 10;
  hero.defence = 10;
  hero.levelUp();
  expect(hero.level).toBe(2);
  expect(hero.attack).toBe(12);
  expect(hero.defence).toBe(12);
});

test('Проверка повышения уровня умершего', () => {
  const hero = new Character('Hero', 'Bowman');
  hero.attack = 10;
  hero.defence = 40;
  hero.health = -1;
  expect(() => hero.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('Проверка понижения уровня', () => {
  const hero = new Character('Andrew', 'Swordsman');
  hero.health = 100;
  hero.defence = 40;
  hero.damage(50);
  expect(hero.health).toBe(70);
});

test('Проверка понижения уровня умершего', () => {
  const hero = new Character('Andrew', 'Swordsman');
  hero.health = -1;
  hero.defence = 40;
  expect(() => hero.damage(250)).toThrow('Уровень здоровья меньше нормы');
});