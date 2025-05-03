const binarySearch = (arr, value) => {
    if (!arr.length) {
        return
    }

    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (value === arr[mid]) {
            return mid;
        } else if (value < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

describe('Binary Search', () => {
    it('Test', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2)
        expect(binarySearch([1, 2, 3, 4, 5], 9)).toBe(-1)
        expect(binarySearch([])).toBeFalsy()
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0)
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4)
        expect(binarySearch([1, 2, 3, 4], 3)).toBe(2)
        expect(binarySearch([1, 2, 3, 4], 0)).toBe(-1)
    })
})