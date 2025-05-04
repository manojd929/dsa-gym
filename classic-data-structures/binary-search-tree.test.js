class Node {
    constructor(value) {
        this.data = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode
            return;
        }

        let current = this.root

        while (true) {
            if (value < current.data) {
                if (!current.left) {
                    current.left = newNode;
                }
                current = current.left;
            } else if (value > current.data) {
                if (!current.right) {
                    current.right = newNode;
                }
                current = current.right;
            } else {
                return
            }
        }
    }

    findMinimumNode(node) {
        let current = node
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    remove(value, node = this.root) {
        if (!node) {
            return null;
        }

        if (value < node.data) {
            node.left = this.remove(value, node.left)
        } else if (value > node.data) {
            node.right = this.remove(value, node.right)
        } else {
            if (!node.left && !node.right) {
                return null
            } else if (!node.left) {
                return node.right
            } else if (!node.right) {
                return node.left
            } else {
                let minNode = this.findMinimumNode(node.right)
                node.data = minNode.data
                node.right = this.remove(minNode.data, node.right)
            }
        }
        return node;
    }

    search(value) {
        let current = this.root
        if (!current) {
            return
        }

        while (current) {
            if (current.data === value) {
                return true
            }
            current = current.data > value ? current.left : current.right;
        }
        return false;
    }

    preOrderTraversal(node = this.root) {
        const result = []

        const traverse = (node) => {
            if (!node) {
                return
            }
            result.push(node.data)
            traverse(node.left)
            traverse(node.right)
        }

        traverse(node)
        return result.join(' -> ')
    }

    inOrderTraversal(node = this.root) {
        const result = []

        const traverse = (node) => {
            if (!node) {
                return
            }
            traverse(node.left)
            result.push(node.data)
            traverse(node.right)
        }

        traverse(node)
        return result.join(' -> ')
    }

    postOrderTraversal(node = this.root) {
        const result = []

        const traverse = (node) => {
            if (!node) {
                return
            }
            traverse(node.left)
            traverse(node.right)
            result.push(node.data)
        }

        traverse(node)
        return result.join(' -> ')
    }
}

describe('BinarySearchTree - BST', () => {
    const bst = new BST();
    bst.insert(3)
    bst.insert(1)
    bst.insert(2)
    bst.insert(4)
    bst.insert(5)
    bst.insert(6)
    bst.insert(7)

    it('Test - INORDER TRAVERSAL', () => {
        expect(bst.inOrderTraversal()).toBe('1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7')
    })

    it('Test - PREORDER TRAVERSAL', () => {
        expect(bst.preOrderTraversal()).toBe('3 -> 1 -> 2 -> 4 -> 5 -> 6 -> 7')
    })

    it('Test - POSTORDER TRAVERSAL', () => {
        expect(bst.postOrderTraversal(bst.root)).toBe('2 -> 1 -> 7 -> 6 -> 5 -> 4 -> 3')
    })

    it('Search', () => {
        expect(bst.search(3)).toBeTruthy()
        expect(bst.search(7)).toBeTruthy()
        expect(bst.search(1)).toBeTruthy()
        expect(bst.search(8)).toBeFalsy()
        expect(bst.search(0)).toBeFalsy()
    })

    it('FindMinimumNode', () => {
        expect(bst.findMinimumNode(bst.root).data).toBe(1)
        expect(bst.findMinimumNode(bst.root.right.right).data).toBe(5)
    })

    it('Remove', () => {
        bst.remove(6)
        expect(bst.inOrderTraversal()).toBe('1 -> 2 -> 3 -> 4 -> 5 -> 7')
        bst.remove(1)
        expect(bst.inOrderTraversal()).toBe('2 -> 3 -> 4 -> 5 -> 7')
        bst.remove(3)
        expect(bst.inOrderTraversal()).toBe('2 -> 4 -> 5 -> 7')
    })
})