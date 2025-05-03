class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue(index) {
        return this.items.splice(index, 1)[0]
    }

    print() {
        let result = []
        for (let i = 0; i < this.items.length; i++) {
            result.push(this.items[i])
        }
        return result.join('-')
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
        expect(q.dequeue(1)).toBe(2)
        expect(q.items.length).toBe(2)
        expect(q.print()).toBe('1-3')
    })

}) 