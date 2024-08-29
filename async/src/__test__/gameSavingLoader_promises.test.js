import GameSavingLoader from '../js/gameSavingLoader_async-await.js';
import read from '../js/reader.js';
import json from '../js/parser.js';


test('Успешное сохранение', () => {
  return GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000,
      },
    });
  });
});

test('Ошибка при парсинге', () => {
  class GameSavingLoaderError {
    static load() {
      return read().then((data) => {
        return json(data).then(() => {
          throw new Error('Ошибка при парсинге');
        });
      });
    }
  }

  return GameSavingLoaderError.load().catch((error) => {
    expect(error.message).toBe('Ошибка при парсинге');
  });
});