/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. 

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false 

Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
*///
function isSameTree(p, q) {
    let sameTree = true;

    function checkSameNode(p, q) {
        // Check if P and Q are NULL
        if (!p && !q) {
            return;
            // Check if either P OR Q is NULL, if one of them are, then they are not equal to each other.
        } else if (!p || !q) {
            sameTree = false;
            return;
            // If the VALUES are not equal, then they are not the same tree.
        } else if (p.val !== q.val) {
            sameTree = false;
            return;
        }

        // Check the NODE to the LEFT and RIGHT//
        checkSameNode(p.left, q.left);
        checkSameNode(p.right, q.right);
    }

    checkSameNode(p, q);

    return sameTree;
}

module.exports = isSameTree;


/*
Time Complexity: O(P + Q) - Where P and Q are number of Nodes in Input Trees.
Space Complexity: O(1)
*/