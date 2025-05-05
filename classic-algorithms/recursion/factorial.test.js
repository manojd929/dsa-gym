class Factorial {
  static recursive(num) {
    if (num <= 0) {
      return 1;
    }
    return num * Factorial.recursive(num - 1);
  }

  static iterative(num) {
    if (num <= 1) {
      return 1
    }

    let result = 1;

    for (let i = 2; i <= num; i++) {
      result *= i
    }
    return result
  }
}

describe('Factorial N', () => {
  test('Test Case', () => {
    expect(Factorial.recursive(0)).toBe(1);
    expect(Factorial.recursive(5)).toBe(120);
    expect(Factorial.recursive(10)).toBe(3628800);
    expect(Factorial.iterative(0)).toBe(1);
    expect(Factorial.iterative(5)).toBe(120);
    expect(Factorial.iterative(10)).toBe(3628800);
  });
});
