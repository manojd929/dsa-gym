/*
Same Binary Tree
Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.

Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

Example 1:

Input: p = [1,2,3], q = [1,2,3]

Output: true

Example 2:

Input: p = [4,7], q = [4,null,7]

Output: false

Example 3:

Input: p = [1,2,3], q = [1,3,2]

Output: false

Constraints:

0 <= The number of nodes in both trees <= 100.
-100 <= Node.val <= 100
*/

class TreeNode {
    constructor(data = 0) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const tree1 = new TreeNode(4)
tree1.left = new TreeNode(3)
tree1.left.left = new TreeNode(1)
tree1.left.right = new TreeNode(2)
tree1.right = new TreeNode(6)
tree1.right.left = new TreeNode(5)
tree1.right.right = new TreeNode(8)
tree1.right.right.left = new TreeNode(7)
tree1.right.right.right = new TreeNode(9)

const tree2 = new TreeNode(4)
tree2.left = new TreeNode(3)
tree2.left.left = new TreeNode(1)
tree2.left.right = new TreeNode(2)
tree2.right = new TreeNode(6)
tree2.right.left = new TreeNode(5)
tree2.right.right = new TreeNode(8)
tree2.right.right.left = new TreeNode(7)
tree2.right.right.right = new TreeNode(9)

const solution = (t1, t2) => {
    if (!t1 && !t2) {
        return true;
    }

    if (t1 && t2 && t1.data === t2.data) {
        return solution(t1.left, t2.left) && solution(t1.right, t2.right)
    }
    return false;
}

describe('Same Trees', () => {
    it('Test', () => {
        expect(solution(tree1, tree2)).toBe(true)
        tree2.right.right.right = null
        expect(solution(tree1, tree2)).toBe(false)
    })
})