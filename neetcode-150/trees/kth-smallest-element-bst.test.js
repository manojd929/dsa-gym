/*
Kth Smallest Integer in BST
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

A binary search tree satisfies the following constraints:

The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.

Example 1:

Input: root = [2,1,3], k = 1

Output: 1

Example 2:

Input: root = [4,3,5,2,null], k = 4

Output: 5

Constraints:

1 <= k <= The number of nodes in the tree <= 1000.
0 <= Node.val <= 1000
*/

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

const solution = (root, k) => {
    if (!root) {
        return
    }

    const result = []

    const traverse = (node) => {
        if (node) {
            traverse(node.left)
            result.push(node.data)
            traverse(node.right)
        }
    }
    traverse(root)

    return result[k - 1];
}

describe('Kth Smallest Integer in BST', () => {
    it('Test', () => {
        expect(solution(tree1, 4)).toBe(4)
        expect(solution(tree1, 1)).toBe(1)
        expect(solution(tree1, 7)).toBe(7)
    })
})
