const { Team, Character } = require('../js/set');

let member = new Team();

test('Добавление персонажа', () => {
  const character = new Character('Anna');
  member.add(character);
  expect(member.toArray()).toContain(character);
});

test('Дубль персонажа', () => {
  const character = new Character('Anna');
  member.add(character);
  expect(() => member.add(character)).toThrow(`Участник ${character} уже существует в списке команды`);
});

test('Добавление нескольких персонажей', () => {
  const character1 = new Character('Anna');
  const character2 = new Character('Bob');
  member.addAll(character1, character2);
  expect(member.toArray()).toEqual(expect.arrayContaining([character1, character2]));
});

test('Отсутствие ошибки при добавлении addAll дубляжей персонажа', () => {
  const character1 = new Character('Hero');
  const character2 = new Character('Hero');
  member.add(character1);
  member.addAll(character2);
  expect(member.toArray()).toContain(character1);
  expect(member.toArray()).toContain(character2);
});

test('Конвертация Set в массив', () => {
  const character1 = new Character('Hero');
  const character2 = new Character('Hero');
  member.add(character1);
  member.add(character2);
  expect(member.toArray()).toEqual(expect.arrayContaining([character1, character2]));
});