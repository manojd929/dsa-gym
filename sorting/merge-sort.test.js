const merge = (leftArr = [], rightArr = []) => {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return sortedArr.concat(leftArr, rightArr);
};

const mergeSort = (arr = []) => {
  const length = arr.length;
  if (length <= 1) {
    return arr;
  }
  const mid = Math.floor(length / 2);
  const sortedLeftArr = mergeSort(arr.slice(0, mid));
  const sortedRightArr = mergeSort(arr.slice(mid, length));
  return merge(sortedLeftArr, sortedRightArr);
};

describe('Merge Sort', () => {
  test('Test Case', () => {
    const result = [1, 3, 5, 7, 9];
    expect(mergeSort([9, 7, 3, 1, 5])).toEqual(result);
    expect(mergeSort([9, 7, 5, 3, 1])).toEqual(result);
    expect(mergeSort([1, 3, 5, 7, 9])).toEqual(result);
  });
});
