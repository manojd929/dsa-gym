/*
Maximum Depth of Binary Tree

Given the root of a binary tree, return its depth.

The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [1,2,3,null,null,4]

Output: 3

Example 2:

Input: root = []

Output: 0

Constraints:

0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100
*/

class TreeNode {
    constructor(data = 0) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const tree = new TreeNode(4)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(1)
tree.left.right = new TreeNode(3)
tree.right = new TreeNode(6)
tree.right.left = new TreeNode(5)
tree.right.right = new TreeNode(8)
tree.right.right.left = new TreeNode(7)
tree.right.right.right = new TreeNode(9)

class MaxDepth {
    static recursive(root) {
        if (!root) {
            return 0
        }

        return 1 + Math.max(MaxDepth.recursive(root.left), MaxDepth.recursive(root.right))
    }

    static iterative(root) {
        if (!root) {
            return 0;
        }

        const queue = [root]
        let maxDepth = 0;

        while (queue.length) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (node.left) {
                    queue.push(node.left)
                }
                if (node.right) {
                    queue.push(node.right)
                }
            }
            maxDepth++;
        }
        return maxDepth;
    }
}

describe('Maximum Depth of Binary Tree', () => {
    it('Test', () => {
        expect(MaxDepth.recursive(tree)).toBe(4)
        expect(MaxDepth.iterative(tree)).toBe(4)
    })
})

