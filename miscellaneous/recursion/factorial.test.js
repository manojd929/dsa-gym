const factorial = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

describe('Factorial N', () => {
  test('Test Case', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });
});
