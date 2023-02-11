function maxDepth(root) {
    let maxDepth = 0;

    function dive(node, curentDepth) {
        // If there are no node or null, we calculate our maxDepth
        if (!node) {
            // console.log("currentDepth = " + curentDepth);
            maxDepth = Math.max(curentDepth - 1, maxDepth);
            console.log("maxDepth = " + maxDepth);
            return;
        }

        dive(node.left, curentDepth + 1);
        dive(node.right, curentDepth + 1);

        console.log("currentDepth = " + curentDepth);
    }

    dive(root, 1);

    return maxDepth;
}

console.log(maxDepth([3, 9, 20, null, null, 15, 7, 4, 6, 9, 10, 12]));