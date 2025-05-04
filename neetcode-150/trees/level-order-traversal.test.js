class TreeNode {
    constructor(data = 0) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const tree = new TreeNode(4)
tree.left = new TreeNode(3)
tree.left.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(6)
tree.right.left = new TreeNode(5)
tree.right.right = new TreeNode(8)
tree.right.right.left = new TreeNode(7)
tree.right.right.right = new TreeNode(9)

const levelOrderTraversal = (root) => {
    console.log(root)
    if (!root) {
        return []
    }

    const result = []
    const queue = [root]

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.data)

        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }

    return result.join('->')
}

describe('Level Order Traversal', () => {
    it('Test', () => {
        expect(levelOrderTraversal(tree)).toBe('4->3->6->1->2->5->8->7->9')
    })
})