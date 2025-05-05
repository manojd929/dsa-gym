/*
Diameter of Binary Tree

The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

The length of a path between two nodes in a binary tree is the number of edges between the nodes.

Given the root of a binary tree root, return the diameter of the tree.

Example 1:

Input: root = [1,null,2,3,4,5]

Output: 3
Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].

Example 2:

Input: root = [1,2,3]

Output: 2

Constraints:

1 <= number of nodes in the tree <= 100
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

const solution = (root) => {
    let maxDiamater = 0;
    const traverse = (root) => {
        if (!root) {
            return 0;
        }
        const left = traverse(root.left)
        const right = traverse(root.right)
        maxDiamater = Math.max(maxDiamater, left + right)

        return 1 + Math.max(left, right);
    }
    traverse(root)

    return maxDiamater
}


describe('Diameter of Binary Tree', () => {
    it('Test', () => {
        expect(solution(tree)).toBe(5)
    })
})