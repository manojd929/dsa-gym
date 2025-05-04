/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3

Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1

Constraints:
0 <= s.length <= 1000
s may consist of printable ASCII characters.
*/

const solution = (str = '') => {
    const seenSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (seenSet.has(str[right])) {
            seenSet.delete(str[left])
            left++;
        }
        seenSet.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}

describe('Longest Substring without Repeating Characters', () => {
    it('Test', () => {
        expect(solution('zxyzxyz')).toBe(3)
        expect(solution('xxxx')).toBe(1)
    })
})