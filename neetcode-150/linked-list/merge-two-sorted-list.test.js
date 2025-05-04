class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

/* Sample Linked List */
const listOne = new Node(1);
listOne.next = new Node(2);
listOne.next.next = new Node(4);

const listTwo = new Node(1);
listTwo.next = new Node(3);
listTwo.next.next = new Node(5);
listTwo.next.next.next = new Node(6);

const listThree = new Node(1);
listThree.next = new Node(2);
listThree.next.next = new Node(4);

const listFour = new Node(1);
listFour.next = new Node(3);
listFour.next.next = new Node(5);
listFour.next.next.next = new Node(6);

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

class MergeTwoSortedLists {
    static recursiveMethod(l1, l2) {
        if (!l1) {
            return l2;
        }

        if (!l2) {
            return l1;
        }

        if (l1.data <= l2.data) {
            l1.next = MergeTwoSortedLists.recursiveMethod(l1.next, l2)
            return l1;
        } else {
            l2.next = MergeTwoSortedLists.recursiveMethod(l1, l2.next)
            return l2
        }
    }

    static iterativeMethod(l1, l2) {
        let resultList = new Node(0);

        while (l1 && l2) {
            if (l1.data <= l2.data) {
                resultList.next = l1;
                l1 = l1.next;
            } else {
                resultList.next = l2;
                l2 = l2.next;
            }
            resultList = resultList.next
        }

        if (l1) {
            resultList.next = l1;
        } else {
            resultList.next = l2;
        }

        return resultList
    }
}

describe('Merge Two Sorted Lists', () => {
    it('Recursion', () => {
        expect(printLinkedList(listOne)).toBe('1 -> 2 -> 4')
        expect(printLinkedList(listTwo)).toBe('1 -> 3 -> 5 -> 6')
        MergeTwoSortedLists.recursiveMethod(listOne, listTwo)
        expect(printLinkedList(listOne)).toBe('1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6')
    })

    it('Iteration', () => {
        expect(printLinkedList(listThree)).toBe('1 -> 2 -> 4')
        expect(printLinkedList(listFour)).toBe('1 -> 3 -> 5 -> 6')
        MergeTwoSortedLists.iterativeMethod(listThree, listFour)
        expect(printLinkedList(listThree)).toBe('1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6')
    })
})
