class DynamicArray {
    constructor() {
        this.capacity = 2;
        this.items = new Array(2);
        this.length = 0;
    }

    resize() {
        this.capacity = this.capacity * 2;
        const newItems = new Array(this.capacity)

        for (let i = 0; i < this.items.length; i++) {
            newItems[i] = this.items[i]
        }

        this.items = newItems
    }

    get(i) {
        if (i > this.length) {
            return 'Invalid Index Given'
        }
        return this.items[i]
    }

    push(value) {
        if (this.length == this.capacity) {
            this.resize();
        }

        this.items[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length > 0) {
            const value = this.items[this.length - 1];
            this.length--;
            return value;
        }
        return 'Invalid operation'
    }

    print() {
        let s = []
        for (let i = 0; i < this.length; i++) {
            s.push(this.items[i])
        }
        return s.join('-');
    }
}

describe('Dynamic Array', () => {
    const arr = new DynamicArray()

    arr.push(1)
    arr.push(2)
    arr.push(3)
    arr.pop()

    it('Test', () => {
        expect(arr.print()).toBe('1-2');
        expect(arr.capacity).toBe(4);
        expect(arr.length).toBe(2)
        expect(arr.get(1)).toBe(2)
        arr.push(3)
        expect(arr.length).toBe(3)
    })
}) 