import Daemon from '../types/daemon';

test('Объект создан корректно', () => {
  const daemon = new Daemon('Daemon');
  const correctObject = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(daemon).toEqual(correctObject);
})