const insertionSort = (nums = []) => {
  if (nums.length <= 1) {
    return nums;
  }

  for (let i = 1; i <= nums.length - 1; i++) {
    let numberToInsert = nums[i];
    let j;

    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = numberToInsert;
  }

  return nums;
};

describe('Insertion Sort', () => {
  test('Test Case', () => {
    const result = [1, 3, 5, 7, 9];
    expect(insertionSort([9, 7, 3, 1, 5])).toEqual(result);
    expect(insertionSort([9, 7, 5, 3, 1])).toEqual(result);
    expect(insertionSort([1, 3, 5, 7, 9])).toEqual(result);
  });
});
