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
listOne.next.next.next.next.next = listOne.next.next;

const listTwo = new Node(1);
listTwo.next = new Node(2);
listTwo.next.next = new Node(3);
listTwo.next.next.next = new Node(4);


class DetectCycle {

    static setSolution(head) {
        const nodeSet = new Set()
        let current = head

        while (current) {
            if (nodeSet.has(current)) {
                return true;
            }

            nodeSet.add(current)
            current = current.next;
        }
        return false;
    }

    static twoPointerSolution(head) {
        let slow = head, fast = head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

            if (slow == fast) {
                return true
            }
        }
        return false
    }
}

describe('Detect Cycle - Linked List', () => {
    it('Set Solution', () => {
        expect(DetectCycle.setSolution(listOne)).toBe(true)
        expect(DetectCycle.setSolution(listTwo)).toBe(false)
    })

    it('Two Pointer', () => {
        expect(DetectCycle.twoPointerSolution(listOne)).toBe(true)
        expect(DetectCycle.twoPointerSolution(listTwo)).toBe(false)
    })
})