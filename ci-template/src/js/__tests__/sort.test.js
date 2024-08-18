/* import { list } from '../sort';
import sortByHealth from '../sort';

const sortedList = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const arr1 = [];

const arr2 = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 100 },
  { name: 'мечник', health: 100 },
];
test('array is array', () => {
  const result = sortByHealth(1);
  expect(result).toBe('this is not array');
});
test('is there is a, b in arr', () => {
  const result = sortByHealth(arr1);
  expect(result).toBe('there is no element is array');
});

test('elements are equal', () => {
  const result = sortByHealth(arr2);
  expect(result).toBe('the elements are equal');
});

test('sort arr by health', () => {
  const result = sortByHealth(list);
  expect(result.health).toEqual(sortedList.health);
}); */