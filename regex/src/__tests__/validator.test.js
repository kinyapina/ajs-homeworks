import validateUsername from '../js/validator';

test('Ошибка в email: Имя не должно начинаться c цифр', () => {
  const email = '7zip@yandex.com';
  const result = validateUsername(email);
  expect(result).toBe(false);
});

test('Ошибка в email: Имя не должно содержать подряд более трёх цифр', () => {
  const email = 'zip7777@yandex.com';
  const result = validateUsername(email);
  expect(result).toBe(false);
});

test('Ошибка в email: Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {
  const email = 'zi&@yandex.com';
  const result = validateUsername(email);
  expect(result).toBe(false);
});