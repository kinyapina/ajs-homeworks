import { list, sortedList } from '../sort'
import toSortList from '../sort';

test('sort list form big to small', () => {
  for (let i = 0; i <= list.length; i++) {
    const result = list.sort(toSortList(list[i], list[i++]));
    expect(result).toEqual(sortedList);
  }
});


