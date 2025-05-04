/*
Valid Parentheses

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true

Example 2:

Input: s = "([{}])"

Output: true

Example 3:

Input: s = "[(])"

Output: false

Explanation: The brackets are not closed in the correct order.

Constraints:

1 <= s.length <= 1000

*/

const solution = (str = '') => {
    if (!str) {
        return false
    }

    const stack = []
    for (let char of str) {
        switch (char) {
            case '(':
            case '{':
            case '[':
                stack.push(char);
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false;
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false;
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return stack.length === 0;
}

describe('Valid Parentheses', () => {

    it('Test', () => {
        expect(solution('[]')).toBe(true)
        expect(solution('[])')).toBe(false)
        expect(solution('([{}])')).toBe(true)
        expect(solution('[(])')).toBe(false)
    })
})
