class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertAtEnd(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode;
    }

    deleteNode (val) {
        if (!this.head) {
            return;
        }

        if (this.head.value === val) {
            this.head = this.head.next;
            return
        }

        let current = this.head
        while (current.next && current.next.value !== val) {
            current = current.next;
        }
        console.log(val, current.value)
        if (current.next) {
            current.next = current.next.next;
        }
    }

    insertAtFirst(val) {
        const newNode = new Node(val);

        let currentHead = this.head;
        newNode.next = currentHead;
        this.head = newNode;
    }

    print() {
        let current = this.head

        let result = []
        while (current) {
            result.push(current.value)
            current = current.next
        }
        return result.join('->')
    }
}

describe('Linked List', () => {
    const ll = new LinkedList()
    ll.insertAtEnd(1)
    ll.insertAtEnd(2)
    ll.insertAtEnd(3)
    ll.insertAtEnd(4)

    it ('Dummy Test', () => {
        expect(ll.print()).toBe('1->2->3->4')
        ll.insertAtFirst(0)
        expect(ll.print()).toBe('0->1->2->3->4')

        ll.deleteNode(2)
        expect(ll.print()).toBe('0->1->3->4')
        ll.deleteNode(1)
        expect(ll.print()).toBe('0->3->4')
    })
}) 