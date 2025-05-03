class DynamicArray {
    constructor () {
        this.capacity = 2;
        this.items = new Array(2);
        this.length = 0;
    }

    print() {
        let s = ''
        for (let i = 0; i < this.length; i++) {
            s += this.items[i] + ' '
        }
        return s;
    }
}

describe('Dynamic Array', () => {
    const arr = new DynamicArray()

    it ('PRINTS ARRAY', () => {
        expect(arr.print()).toEqual('');
    })
}) 