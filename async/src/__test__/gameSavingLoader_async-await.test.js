import GameSavingLoader from '../js/gameSavingLoader_async-await.js';

test('Успешное сохранение', async () => {
  const saving = await GameSavingLoader.load();

  expect(saving).toBeDefined();
  expect(saving.id).toBe(9);
  expect(saving.created).toBe(1546300800);
  expect(saving.userInfo).toEqual({
    id: 1,
    name: "Hitman",
    level: 10,
    points: 2000
  });
});