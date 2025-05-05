const xPowery = (x = 0, y = 0) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'Invalid arguments given'
    }
    if (x === 0 && y === 0) {
        return 1
    }

    if (x === 0) {
        return 0
    }

    if (y === 0) {
        return 1
    }

    if (y % 2 === 0) {
        const result = xPowery(x, y / 2);
        return result * result;
    }

    return x * xPowery(x, y - 1);
}

describe('X-Power-Y', () => {
    it("Test", () => {
        expect(xPowery(0, 0)).toBe(1)
        expect(xPowery(0, 1)).toBe(0)
        expect(xPowery(1, 1)).toBe(1)

        expect(xPowery(1, 9)).toBe(1)
        expect(xPowery(2, 9)).toBe(512)
        expect(xPowery(2, 16)).toBe(65536)
        expect(xPowery(25, 2)).toBe(625)
        expect(xPowery(25, 3)).toBe(15625)
    })
})