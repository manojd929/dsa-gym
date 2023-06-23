function printNumbers(max, current, res = []) {
  if (current > max) {
    return;
  }
  res.push(current);
  printNumbers(max, current + 1, res);
}

describe('Print Numbers', () => {
  test('Test Case', () => {
    const res = [];
    printNumbers(10, 1, res);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
