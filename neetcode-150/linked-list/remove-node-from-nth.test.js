class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const printLinkedList = (node) => {
    if (!node) {
        return
    }

    const result = []
    while (node) {
        result.push(node.data)
        node = node.next;
    }
    return result.join(' -> ')
}

/* Sample Linked List */
const listOne = new Node(1);

const listTwo = new Node(1);
listTwo.next = new Node(2);


const listThree = new Node(1);
listThree.next = new Node(2);
listThree.next.next = new Node(3);
listThree.next.next.next = new Node(4);

class RemoveNthNodeFromEnd {
    static remove(head, endPosition) {
        let N = 0;
        let current = head;

        while (current) {
            N++;
            current = current.next;
        }
        const removeIndex = N - endPosition
        if (removeIndex === 0) {
            return head.next;
        }

        current = head;
        for (let i = 0; i < N - 1; i++) {
            if (i + 1 === removeIndex) {
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
        return head;
    }
}

describe('Remove Nth Node from End of Linked List', () => {
    it('Test', () => {
        expect(printLinkedList(listOne)).toBe('1')
        // Input: head = [1], n = 1 | Output: []
        RemoveNthNodeFromEnd.remove(listOne, 1)

        expect(printLinkedList(listTwo)).toBe('1 -> 2')
        // Input: head = [1,2] n = 2 | Output: [2]
        RemoveNthNodeFromEnd.remove(listTwo, 2)

        expect(printLinkedList(listThree)).toBe('1 -> 2 -> 3 -> 4')
        // Input: head = [1,2,3,4] n = 2 | Output: [1,2,4]
        RemoveNthNodeFromEnd.remove(listThree, 2)
    })
})