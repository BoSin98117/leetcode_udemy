/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. 

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0. 

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/


const threeSum = nums => {
    // Sort the array first so that we can achieve O(n^2) Time Comlexity.
    // (a, b) => a - b | This is a shorthand that sorts from least to greatest.
    nums.sort((a, b) => a - b);
    // Save results into an Array so we can return it.
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        // Prevent duplicates
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        console.log("nums[i] = " + nums[i]);

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[i], nums[left], nums[right]]);
                left++
                // This will skip the next index if it has the same value as the previous index.  
                // This will ensure that we do not push the same values into our RES ARRAY more than once.
                // *This only works if the ARRAY is SORTED
                while (nums[left] === nums[left - 1]) {
                    left++
                }
            } else if (nums[left] + nums[right] < target) {
                left++
            } else {
                right--
            }
        }
    }
    return res;
};

module.exports = threeSum;


/*
Time Complexity: O(n^2) + O(n log n) | but we get rid of the smaller value so our Big O = O(n^2) - It is this because we start with the first index and iterate through the entire array, then we move to the next index and iterate over the rest of the array and so on...  
Space Complexity: O(1) - 
*/