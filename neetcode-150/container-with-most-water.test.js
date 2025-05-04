/*
Container With Most Water

You are given an integer array heights where heights[i] represents the height of the bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.


Example 1:
Input: height = [1,7,2,5,4,7,3,6]

Output: 36

Example 2:

Input: height = [2,2,2]

Output: 4

Constraints:

2 <= height.length <= 1000
0 <= height[i] <= 1000
*/

const solution = (list) => {
    if (!list.length) {
        return 0;
    }

    let max = 0;
    let left = 0, right = list.length - 1;

    while (left < right) {
        let area = Math.min(list[left], list[right]) * (right - left)
        max = Math.max(max, area)
        if (list[left] <= list[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

describe('Container with Most Water', () => {
    it('Test', () => {
        expect(solution([1, 7, 2, 5, 4, 7, 3, 6])).toBe(36)
        expect(solution([2, 2, 2])).toBe(4)
    })
})
