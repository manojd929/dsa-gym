class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue(index) {
        this.items.splice(index, 1)
    }
}

describe('Queue', () => {
    const q = new Queue()

    it('Test', () => {
        expect(q.items.length).toBe(0)
        q.enqueue(1)
        q.enqueue(2)
        q.enqueue(3)
        expect(q.items.length).toBe(3)
        q.dequeue(1)
        expect(q.items.length).toBe(2)
    })

}) 