const bubbleSort = (nums = []) => {
  if (nums.length <= 1) {
    return nums;
  }

  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i <= nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return nums;
};

describe('Bubble Sort', () => {
  test('Test Case', () => {
    const result = [1, 3, 5, 7, 9];
    expect(bubbleSort([9, 7, 3, 1, 5])).toEqual(result);
    expect(bubbleSort([9, 7, 5, 3, 1])).toEqual(result);
    expect(bubbleSort([1, 3, 5, 7, 9])).toEqual(result);
  });
});
