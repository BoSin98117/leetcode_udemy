/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array. 

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23 

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/


/*
Time Complexity: O(n) - 1 for loop
Space Complexity: O(n) - dp = [nums[0]] - we allocate a dp ARRAY
*/
function maxSubArray(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        nums[i] = Math.max(num, num + nums[i - 1]);
        max = Math.max(max, nums[i]);
    }

    return max;
}

module.exports = maxSubArray;
/*
[-2,1,-3,4,-1,2,1,,-5,4] - Input Array
nums[i] -2   1  -3   4  -1   2   1  -5   4
sum     -2   1  -2   4   3   5   6   1   5
max     -2   1   1   4   4   5   6   6   6
Iterations
1)  nums[i], sum, max = -2
2)  sum + nums[i] = (-2) + 1 = -1
    nums[i] = 1
    Is sum + nums[i] > nums[i] = Is -1 > 1? NO, so SUM = NUMS[I] | SUM = 1
    max = Math.max(max, sum) | max = Math.max(-2, 1) | MAX = 1
3)  sum + nums[i] = 1 (-3) = -2
    nums[i] = -3
*/


