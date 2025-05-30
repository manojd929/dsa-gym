/*
Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:

Input: root = [1,2,3,4,5], subRoot = [2,4,5]

Output: true

Example 2:

Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]

Output: false

Constraints:

0 <= The number of nodes in both trees <= 100.
-100 <= root.val, subRoot.val <= 100
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

const tree1 = new TreeNode(2)
tree1.left = new TreeNode(1)
tree1.left = new TreeNode(3)

const tree2 = new TreeNode(6)
tree2.left = new TreeNode(5)
tree2.right = new TreeNode(8)
tree2.right.left = new TreeNode(7)
tree2.right.right = new TreeNode(9)

const tree3 = new TreeNode(15)

class SubTreeOfTree {
    static isSameTree(a, b) {
        if (!a && !b) {
            return true
        }
        if (!a || !b || a.data !== b.data) {
            return false;
        }

        return SubTreeOfTree.isSameTree(a.left, b.left) && SubTreeOfTree.isSameTree(a.right, b.right)
    }

    static isSubTreeRecursive(root, subRoot) {
        if (!root) {
            return false
        }

        if (SubTreeOfTree.isSameTree(root, subRoot)) {
            return true;
        }

        return SubTreeOfTree.isSubTreeRecursive(root.left, subRoot) || SubTreeOfTree.isSubTreeRecursive(root.right, subRoot)
    }
}

describe('Subtree of another tree', () => {
    it('Test - False', () => {
        expect(SubTreeOfTree.isSubTreeRecursive(tree, tree3)).toBe(false)
        expect(SubTreeOfTree.isSubTreeRecursive(tree1, tree3)).toBe(false)
        expect(SubTreeOfTree.isSubTreeRecursive(tree2, tree3)).toBe(false)
    })

    it('Test - True', () => {
        // expect(SubTreeOfTree.isSubTreeRecursive(tree, tree1)).toBe(true)
        expect(SubTreeOfTree.isSubTreeRecursive(tree, tree2)).toBe(true)
    })
})
