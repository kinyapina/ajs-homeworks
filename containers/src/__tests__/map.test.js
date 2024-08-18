import ErrorRepository from '../js/map';

let errors = new ErrorRepository();

test('Получение текста известного кода ошибки', () => {
  errors.addError(404, 'Not Found');
  expect(errors.translate(404)).toBe('Not Found');
})

test('Получение текста неизвестного кода ошибки', () => {
  expect(errors.translate(403)).toBe('Unknown error');
})

test('Получение текста неизвестного кода ошибки', () => {
  expect(errors.translate('s')).toBe('Unknown error');
})