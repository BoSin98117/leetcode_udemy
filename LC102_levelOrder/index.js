/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: [] 

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/


function levelOrder(root) {
    // Create an ARRAY to contain SUBARRAYS
    const res = [];

    function helper(node, depth) {
        // If there are no nodes(null), then Return
        if (!node) return;

        // If our Res Array DOES NOT have the Subarray in it, then create the Subarray.
        if (!res[depth]) {
            // res[depth] - Res at index Depth = [] (empty Subarray)
            res[depth] = [];
        }

        // Push the values into the Subarray.
        res[depth].push(node.val);
        helper(node.left, depth + 1);
        helper(node.right, depth + 1);
    }

    // We use '0' because array indices start at 0.
    helper(root, 0);

    return res;
}

module.exports = levelOrder;


/*
Time Complexity: O(n) - We traverse through every Node in the Tree.
Space Complexity: O(1)
Space Complexity: O(n) - if the interviewer says recursive calls counts as space complexity.
*/