/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise. 

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index. 

Constraints:
1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

// Start filling out if true or false from the end of array
function canJump(nums) {
    const memo = [];
    memo[nums.length - 1] = true;
    // Start filling out if true or false from the end of array
    for (let i = nums.length - 2; i >= 0; i--) {
        const maxIndex = Math.min(nums.length - 1, i + nums[i]);
        memo[i] = false;
        for (let j = i + 1; j <= maxIndex; j++) {
            if (memo[j]) {
                memo[i] = true;
            }
        }
    }
    return memo[0];
}

module.exports = canJump;

/*
Time Complexity:
Space Complexity:
*/

/*
    // Greedy Method - Best Method
    let goodIndex = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (goodIndex <= i + nums[i]) {
            goodIndex = i;
        }
    }
    return goodIndex === 0;

Iterations:
Input array:
[3, 2, 1, 0, 4]

1st Iteration:
goodIndex = 4
i = 3
if (4 <= (3 + 0))
    if (4 <= 3) | false
goodIndex = 4

2nd Iteration:
goodIndex = 4
i = 2
if (4 <= (2 + 1))
    if (4 <= 3) | false
goodIndex = 4

3rd Iteration:
goodIndex = 4
i = 1
if (4 <= (1 + 2))
    if (4 <= 3) | false
goodIndex = 4

4th Iteration:
goodIndex = 4
i = 0
if (4 <= (0 + 3))
    if (4 <= 3) | false
goodIndex = 4
*/


/*
// Recursive Backtracking Method
// Very inefficient solution
// Time Complexity: exponential time 
// Start at index[0]
function canJump(nums, index = 0) {
    // Return True if the index is the last index
    if (index === nums.length - 1) {
        return true;
    }

    const maxIndex = Math.min(nums.length - 1, index + nums[index]);
    for (let i = index + 1; i <= maxIndex; i++) {
        if (canJump(nums, i)) {
            return true;
        }
    }
    return false;
}
*/

/*
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
*/