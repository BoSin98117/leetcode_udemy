/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. 

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:
1 <= nums.length <= 2500
-104 <= nums[i] <= 104
*/
//
function lengthOfLIS(nums) {
    if (nums.length === 0) { return 0; }

    let dpSubsequence = new Array(nums.length).fill(1);
    let maxSoFar = 1;

    console.log("dpsequence = " + dpSubsequence);

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                dpSubsequence[j] = Math.max(dpSubsequence[i] + 1, dpSubsequence[j]);
            }
        }
        maxSoFar = Math.max(maxSoFar, dpSubsequence[j]);
    }
    return maxSoFar;
}

module.exports = lengthOfLIS;


/*
Time Complexity: O(N^2) - We do up to N work, for all N elements
Space Complexity: O(N) - We store the answer up to N sub problems utilizing the dpSubsequence[] array.
*/

