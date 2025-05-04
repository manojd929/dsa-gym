/*

Products of Array Except Self

Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]

Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]

Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20

*/

const productOfArray = (list) => {
    let prod = 1;
    let zeroCount = 0;

    for (let num of list) {
        if (num !== 0) {
            prod *= num;
        } else {
            zeroCount++;
        }
    }

    if (zeroCount > 1) {
        return Array(list.length).fill(0)
    }

    const result = new Array(list.length)
    for (let i = 0; i < list.length; i++) {
        if (zeroCount > 0) {
            result[i] = list[i] === 0 ? prod : 0
        } else {
            result[i] = prod / list[i]
        }
    }
    return result;
}

describe('Product of Array Except Self', () => {
    it('Test', () => {
        expect(productOfArray([1, 2, 4, 6])).toEqual([48, 24, 12, 8])
        expect(productOfArray([-1, 0, 1, 2, 3])).toEqual([0, -6, 0, 0, 0])
    })
})