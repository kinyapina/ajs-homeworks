import Character from '../types/Character';

test('name consist from numbers', () => {
  const result = new Character(5, 'Bowman');
  expect(result).toBe('Имя должно содержать только буквы');
});

test('name with numbers', () => {
  const result = new Character('Rex5', 'Bowman');
  expect(result).toBe('Имя должно содержать только буквы');
});

test('name consist from one letter', () => {
  const result = new Character('Z', 'Bowman');
  expect(result).toBe('Количество символов в имени должно быть от 2 до 10');
});

test('type is not from the list', () => {
  const result = new Character('Zorro', 'Minimum');
  expect(result).toBe('Значение необходимо выбрать из списка');
});
test('this.type is not from the list', () => {
  const result = new Character('Zorro', 'Minimum');
  expect(result).toBe('Значение необходимо выбрать из списка');
});
test('this.type is not from the list', () => {
  const result = new Character('Zorro', 'Minimum');
  expect(result).toBe('Значение необходимо выбрать из списка');
});

test('levelUp: health < 0', () => {
  const hero = new Character('Zorro', 'Bowman');
  hero.health = -1;
  const result = hero.levelUp();
  expect(result).toBe('Нельзя повысить левел умершего');
});

test('levelUp: health > 0', () => {
  const hero = new Character('Zorro', 'Bowman');
  hero.health = 20;
  const result = hero.levelUp();
  expect(result).toBe('21');
});

test('damage:health > 0', () => {
  const hero = new Character('Zorro', 'Bowman');
  hero.health = 100;
  hero.defence = 10;
  const result = hero.damage(20);
  expect(result).toBe('72');
});

test('damage: health < 0', () => {
  const hero = new Character('Zorro', 'Bowman');
  hero.health = -1;
  const result = hero.damage(20);
  expect(result).toBe('Уровень здоровья меньше нормы');
});