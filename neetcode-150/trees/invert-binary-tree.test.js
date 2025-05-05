class TreeNode {
    constructor(data = 0) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const tree1 = new TreeNode(4)
tree1.left = new TreeNode(2)
tree1.left.left = new TreeNode(1)
tree1.left.right = new TreeNode(3)
tree1.right = new TreeNode(6)
tree1.right.left = new TreeNode(5)
tree1.right.right = new TreeNode(8)
tree1.right.right.left = new TreeNode(7)
tree1.right.right.right = new TreeNode(9)

const tree2 = new TreeNode(4)
tree2.left = new TreeNode(2)
tree2.left.left = new TreeNode(1)
tree2.left.right = new TreeNode(3)
tree2.right = new TreeNode(6)
tree2.right.left = new TreeNode(5)
tree2.right.right = new TreeNode(8)
tree2.right.right.left = new TreeNode(7)
tree2.right.right.right = new TreeNode(9)

class InvertBinaryTree {
    static recursive(root) {
        if (!root) {
            return null
        }

        [root.left, root.right] = [root.right, root.left]
        InvertBinaryTree.recursive(root.left)
        InvertBinaryTree.recursive(root.right)

        return root
    }

    static iterative(root) {
        if (!root) {
            return null
        }

        const queue = [root];

        while (queue.length > 0) {
            const node = queue.shift();

            // Swap children
            [node.left, node.right] = [node.right, node.left];

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return root;
    }
}

describe('Invery Binary Tree', () => {
    const expected = { "data": 4, "left": { "data": 6, "left": { "data": 8, "left": { "data": 9, "left": null, "right": null }, "right": { "data": 7, "left": null, "right": null } }, "right": { "data": 5, "left": null, "right": null } }, "right": { "data": 2, "left": { "data": 3, "left": null, "right": null }, "right": { "data": 1, "left": null, "right": null } } }
    it('Recursive', () => {
        expect(InvertBinaryTree.recursive(tree1)).toEqual(expected)
    })

    it('Iterative', () => {
        expect(InvertBinaryTree.iterative(tree2)).toEqual(expected)
    })
})