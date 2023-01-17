// Dynamic Programming
function canJump(nums) {
    // Create an array with the same length as the input array and fill all indices with FALSE
    let dpPositions = new Array(nums.length).fill(false);
    // Set the first index to TRUE
    dpPositions[0] = true;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true;
                // Once the i step can reach the j step, we don't need to proceed.  Just break out.  This makes the code more efficient.
                break;
            }
        }
    }
    return dpPositions[dpPositions.length - 1];
}