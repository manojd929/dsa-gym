const nestedArrayAdd = (arr = []) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    if (Array.isArray(currentItem)) {
      sum += nestedArrayAdd(currentItem);
    } else {
      sum += currentItem;
    }
  }

  return sum;
};

describe('Nested Array Add', () => {
  test('Test Case', () => {
    expect(nestedArrayAdd([1, 2, 3])).toBe(6);
    expect(nestedArrayAdd([1, [[2, 3], 4]])).toBe(10);
    expect(nestedArrayAdd([[[[[[[[1]]]]]]]])).toBe(1);
    expect(nestedArrayAdd([[1], [2], [3]])).toBe(6);
  });
});
