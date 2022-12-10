/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2 

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/


function maxDepth(root) {
    let maxDepth = 0;

    function dive(node, curentDepth) {
        // If there are no node or null, we calculate our maxDepth
        if (!node) {
            maxDepth = Math.max(curentDepth - 1, maxDepth);
            return;
        }

        dive(node.left, curentDepth + 1);
        dive(node.right, curentDepth + 1);
    }

    dive(root, 1);

    return maxDepth;
}

module.exports = maxDepth;


/*
Time Complexity: O(n) - We traverse through every Node in the Tree.
Space Complexity: O(1)
*/