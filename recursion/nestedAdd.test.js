const { describe } = require('node:test');

const nestedAdd = (arr = []) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    if (Array.isArray(currentItem)) {
      sum += nestedAdd(currentItem);
    } else {
      sum += currentItem;
    }
  }

  return sum;
};

describe('Nested Add', () => {
  test('Test Case', () => {
    expect(nestedAdd([1, 2, 3])).toBe(6);
    expect(nestedAdd([1, [[2, 3], 4]])).toBe(10);
    expect(nestedAdd([[[[[[[[1]]]]]]]])).toBe(1);
    expect(nestedAdd([[1], [2], [3]])).toBe(6);
  });
});
