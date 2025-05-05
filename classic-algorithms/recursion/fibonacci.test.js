const getFibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return getFibonacci(n - 1) + getFibonacci(n - 2);
}

const printFibonacci = (n) => {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(getFibonacci(i))
    }
    return result.join('->')
}

describe('Fibonacci', () => {
    it('Test', () => {
        expect(printFibonacci(1)).toBe('0')
        expect(printFibonacci(2)).toBe('0->1')
        expect(printFibonacci(3)).toBe('0->1->1')
        expect(printFibonacci(10)).toBe('0->1->1->2->3->5->8->13->21->34')
    })
})