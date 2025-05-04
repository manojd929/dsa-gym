/*
Add Two Numbers

You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.

Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Return the sum of the two numbers as a linked list.

Example 1:
Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.

Example 2:

Input: l1 = [9], l2 = [9]

Output: [8,1]

Constraints:

1 <= l1.length, l2.length <= 100.
0 <= Node.val <= 9
*/

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

/* Sample Linked List */
const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);

const l2 = new Node(4);
l2.next = new Node(5);
l2.next.next = new Node(6);

const l3 = new Node(9);
const l4 = new Node(9);

class AddTwoList {
    static recursive(l1, l2, carry = 0) {
        if (!l1 && !l2 && !carry) {
            return null
        }

        let v1 = l1 ? l1.data : 0
        let v2 = l2 ? l2.data : 0

        const sum = v1 + v2 + carry

        const newNode = new Node(sum % 10)
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null


        newNode.next = AddTwoList.recursive(next1, next2, Math.floor(sum / 10))

        return newNode
    }

    static iterative(l1, l2) {
        if (!l1 && !l2) {
            return null
        }

        const head = new Node()
        let current = head
        let carry = 0;

        while (l1 || l2 || carry) {
            const v1 = l1 ? l1.data : 0
            const v2 = l2 ? l2.data : 0
            const sum = v1 + v2 + carry

            current.next = new Node(sum % 10)
            carry = Math.floor(sum / 10)

            current = current.next
            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }

        return head.next;
    }
}

describe('Add Two Numbers', () => {
    it('Test', () => {
        expect(AddTwoList.recursive(l1, l2)).toEqual({ "data": 5, "next": { "data": 7, "next": { "data": 9, "next": null } } })
        expect(AddTwoList.recursive(l3, l4)).toEqual({ "data": 8, "next": { "data": 1, "next": null } })
        expect(AddTwoList.iterative(l1, l2)).toEqual({ "data": 5, "next": { "data": 7, "next": { "data": 9, "next": null } } })
        expect(AddTwoList.iterative(l3, l4)).toEqual({ "data": 8, "next": { "data": 1, "next": null } })
    })
})
