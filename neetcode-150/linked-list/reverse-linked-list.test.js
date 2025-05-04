class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

/* Sample Linked List */
const listOne = new Node(1);
listOne.next = new Node(2);
listOne.next.next = new Node(3);
listOne.next.next.next = new Node(4);
listOne.next.next.next.next = new Node(5);

const listTwo = new Node(1);
listTwo.next = new Node(2);
listTwo.next.next = new Node(3);
listTwo.next.next.next = new Node(4);
listTwo.next.next.next.next = new Node(5);

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

class ReverseLinkedList {

    static recursionReverse(head) {
        if (!head || !head.next) {
            return head
        }

        let newHead = ReverseLinkedList.recursionReverse(head.next)
        head.next.next = head
        head.next = null

        return newHead;
    }

    static iterationReverse(head) {
        let prev = null;
        let current = head;

        while (current != null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}
/*




5
4 newHead = rr 5 | 5 | 5.next.next = 5 
3 newHead = rr 4  
2 newHead = rr 3
1 newHead = rr 2
*/


describe('Reverse Linked List', () => {
    it('Recursion-Test', () => {
        expect(printLinkedList(listOne)).toBe('1 -> 2 -> 3 -> 4 -> 5')
        expect(printLinkedList(ReverseLinkedList.recursionReverse(listOne))).toBe('5 -> 4 -> 3 -> 2 -> 1')
    })

    it('Iteration-Test', () => {
        expect(printLinkedList(listTwo)).toBe('1 -> 2 -> 3 -> 4 -> 5')
        expect(printLinkedList(ReverseLinkedList.iterationReverse(listTwo))).toBe('5 -> 4 -> 3 -> 2 -> 1')
    })
})