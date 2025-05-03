class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = this.tail = newNode
            return
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    remove(value) {
        if (!this.head) {
            return
        }

        let current = this.head;

        while (current) {
            if (current.data === value) {
                if (current === this.head) {
                    this.head = this.head.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }

    printForward() {
        let current = this.head
        let result = []
        while (current) {
            result.push(current.data)
            current = current.next;
        }
        return result.join('->')
    }

    printBackward() {
        let current = this.tail;
        let result = [];
        while (current) {
            result.push(current.data)
            current = current.prev;
        }
        return result.join('->')
    }
}

describe('Doubly Linked List', () => {
    const dll = new DoublyLinkedList()
    dll.append(1)
    dll.append(2)
    dll.append(3)

    it('Dummy Test', () => {
        expect(dll.printForward()).toBe('1->2->3')
        dll.prepend(0)
        expect(dll.printForward()).toBe('0->1->2->3')
        expect(dll.printBackward()).toBe('3->2->1->0')

        dll.remove(1)
        expect(dll.printForward()).toBe('0->2->3')
        dll.remove(2)
        expect(dll.printBackward()).toBe('3->0')
    })
}) 