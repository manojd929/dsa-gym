class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        this.items.shift()
    }

    remove(index) {
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
        expect(q.dequeue())
        q.enqueue(1)
        expect(q.remove(1)).toBe(3)
        expect(q.items.length).toBe(2)
        expect(q.print()).toBe('2-1')
    })

}) 