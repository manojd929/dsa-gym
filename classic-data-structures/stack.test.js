class Stack {
    constructor() {
        this.items = new Array()
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        return this.items.pop()
    }

    print() {
        let result = ''
        for (let i = 0; i < this.items.length; i++) {
            result += this.items[i] + '-'
        }
        return result
    }
}

describe('Stack', () => {
    const st = new Stack()

    it('Test', () => {
        expect(st.items.length).toBe(0)
        st.push(1)
        expect(st.items.length).toBe(1)
        expect(st.pop()).toBe(1)
        expect(st.items.length).toBe(0)
        expect(st.print()).toBe('')
    })
}) 