const list = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedList = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
]
test('sort by range', () => {
  const result = list.sort(function (a, b) {
    return b.health - a.health;
  });
  expect(result).toEqual(sortedList);
});


