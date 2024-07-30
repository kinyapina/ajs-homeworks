export function orderByProps(obj, sortOrder) {
  const otherPropsArray = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !sortOrder.includes(key)) {
      otherPropsArray.push({ key, value: obj[key] });
    }
  }

  otherPropsArray.sort((a, b) => a.key.localeCompare(b.key));

  const sortedArray = [];

  for (const key of sortOrder) {
    if (obj.hasOwnProperty(key)) {
      sortedArray.push({ key, value: obj[key] })
    }
  }
  sortedArray.push(...otherPropsArray);
  return (sortedArray)
}

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
export const sortedArray = orderByProps(obj, ['name', 'level']);
