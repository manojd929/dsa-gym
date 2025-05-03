class Stack {
    constructor() {
        this.items = new Array()
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        this.items.pop()
    }
}

describe('Stack', () => {
    const st = new Stack()

    it('Test', () => {
        expect(st.items.length).toBe(0)
        st.push(1)
        expect(st.items.length).toBe(1)
        st.pop()
        expect(st.items.length).toBe(0)
    })
}) 