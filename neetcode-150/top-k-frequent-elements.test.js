/*
Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

Example 2:

Input: nums = [7,7], k = 1

Output: [7]

Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

*/

const topKFrequentElements = (list, k) => {
    const frequencyMap = new Map()

    for (let num of list) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    // Sort Frequency Map
    const sortedMap = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1])

    return sortedMap.slice(0, k).map(entry => entry[0])
}

describe('Top K Frequent Elements', () => {
    it('Test', () => {
        expect(topKFrequentElements([1, 2, 2, 3, 3, 3], 2)).toEqual([3, 2])
        expect(topKFrequentElements([7, 7], 1)).toEqual([7])
    })
})
