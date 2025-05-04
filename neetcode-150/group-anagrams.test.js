/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:

Input: strs = ["x"]

Output: [["x"]]

Example 3:

Input: strs = [""]

Output: [[""]]

Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.

*/

const groupAnagrams = (list = []) => {
    const result = {}

    for (let str of list) {
        const sortedStr = str.split('').sort().join('')
        if (!result[sortedStr]) {
            result[sortedStr] = []
        }
        result[sortedStr].push(str)
    }

    return Object.values(result)
}

describe('Group Anagrams', () => {
    it('Test', () => {
        expect(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])).toEqual([["act", "cat"], ["pots", "tops", "stop"], ["hat"]])
    })
});
