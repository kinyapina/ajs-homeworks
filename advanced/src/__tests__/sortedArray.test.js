import { sortedArray } from '../js/sortedArray';

test('Массив формируется корректно', () => {
  const correctArray = [
    {
      key: 'name',
      value: 'мечник'
    },
    {
      key: 'level',
      value: 2
    },
    {
      key: 'attack',
      value: 80
    },
    {
      key: 'defence',
      value: 40
    },
    {
      key: 'health',
      value: 10
    }
  ];

  expect(sortedArray).toEqual(correctArray);
});