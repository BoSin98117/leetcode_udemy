/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
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

        console.log("depth = " + depth);

        helper(node.left, depth + 1);
        console.log("depth = " + depth);
        helper(node.right, depth + 1);
        console.log("depth = " + depth);
    }

    // We use '0' because array indices start at 0.
    helper(root, 0);

    return res;
}

console.log(levelOrder([3, 9, 20, null, null, 15, 7]));