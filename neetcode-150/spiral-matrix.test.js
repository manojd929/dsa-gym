/*
Spiral Matrix
Given an m x n matrix of integers matrix, return a list of all elements within the matrix in spiral order.

Example 1:

Input: matrix = [[1,2],[3,4]]

Output: [1,2,4,3]

Example 2:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [1,2,3,6,9,8,7,4,5]

Example 3:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:

1 <= matrix.length, matrix[i].length <= 10
-100 <= matrix[i][j] <= 100

*/

const solution = (matrix) => {

    const result = []
    let left = 0, right = matrix[0].length, top = 0, bottom = matrix.length;

    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) {
            result.push(matrix[top][i])
        }

        top++;

        for (let i = top; i < bottom; i++) {
            result.push(matrix[i][right - 1])
        }

        right--;

        if (!(left < right && top < bottom)) {
            break;
        }

        for (let i = right - 1; i >= left; i--) {
            result.push(matrix[bottom - 1][i])
        }

        bottom--;

        for (let i = bottom - 1; i >= top; i--) {
            result.push(matrix[i][left])
        }

        left++;
    }
    return result.join('->')
}

describe('Spiral Matrix', () => {
    it('Test', () => {
        expect(solution([[1, 2], [3, 4]])).toBe('1->2->4->3')
        expect(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe('1->2->3->6->9->8->7->4->5')
        expect(solution([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toBe('1->2->3->4->8->12->11->10->9->5->6->7')
    })
})
