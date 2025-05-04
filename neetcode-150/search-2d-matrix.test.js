/*
Search a 2D Matrix
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.

Can you write a solution that runs in O(log(m * n)) time?

Example 1:

Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

Output: true

Example 2:

Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10000 <= matrix[i][j], target <= 10000

*/

const solution = (matrix, value) => {
    const m = matrix.length;
    const n = matrix[0].length;

    let row = 0, col = n - 1;

    while (row < m && col >= 0) {
        if (matrix[row][col] === value) {
            return true;
        } else if (matrix[row][col] < value) {
            row++;
        } else {
            col--;
        }
    }
    return false;
}

describe('Search 2D Matrix', () => {
    it('Test', () => {
        expect(solution([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10)).toBe(true)
        expect(solution([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 40)).toBe(true)
        expect(solution([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 15)).toBe(false)
        expect(solution([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 9)).toBe(false)
    })
})