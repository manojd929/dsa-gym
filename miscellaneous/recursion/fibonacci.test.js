const getFibonacci = (n) => {
    if (n <= 1) {
        return n;
    }

    return getFibonacci(n - 1) + getFibonacci(n - 2);
}

describe('Fibonacci', () => {
    it('Test', () => {
        expect(getFibonacci(0)).toBe(0)
        expect(getFibonacci(1)).toBe(1)
        expect(getFibonacci(2)).toBe(1)
        expect(getFibonacci(3)).toBe(2)
        expect(getFibonacci(4)).toBe(3)
    })
})