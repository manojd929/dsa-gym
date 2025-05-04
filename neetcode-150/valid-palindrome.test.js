/*
Valid Palindrome

Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true

Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false

Explanation: "tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000
s is made up of only printable ASCII characters.
*/

const isAlphanumeric = (char) => {
    return (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9');
}

const validPalindrome = (str = '') => {
    let copy = ''
    for (let char of str) {
        if (isAlphanumeric(char)) {
            copy += char.toLowerCase();
        }
    }
    return copy.split('').join('') === copy.split('').reverse().join('')
}

const validPalindromeUsingPointer = (str = '') => {
    let left = 0, right = str.length - 1

    while (left < right) {
        while (left < right && !isAlphanumeric(str[left])) {
            left++;
        }

        while (right > left && !isAlphanumeric(str[right])) {
            right--;
        }

        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false
        }

        left++;
        right--;
    }
    return true;
}

describe('Valid Palindrome', () => {
    it('Test', () => {
        expect(validPalindrome("Was it a car or a cat I saw ?")).toBe(true)
        expect(validPalindrome("tab a cat")).toBe(false)
    })

    it('Test using two pointer', () => {
        expect(validPalindromeUsingPointer("Was it a car or a cat I saw?")).toBe(true)
        expect(validPalindromeUsingPointer("tab a cat")).toBe(false)
    })
})
