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

    peek() {
        return this.items[this.items.length - 1]
    }

    print() {
        let result = []
        for (let i = 0; i < this.items.length; i++) {
            result.push(this.items[i])
        }
        return result.join('-')
    }
}

describe('Stack', () => {
    const st = new Stack()

    it('Test', () => {
        expect(st.items.length).toBe(0)
        st.push(1)
        st.push(2)
        st.push(3)
        expect(st.print()).toBe('1-2-3')
        expect(st.peek()).toBe(3)
        st.pop()
        st.pop()
        expect(st.items.length).toBe(1)
        expect(st.pop()).toBe(1)
        expect(st.items.length).toBe(0)
        expect(st.print()).toBe('')
    })
}) 