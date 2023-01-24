/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. 

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true 

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/


const containsDuplicate = nums => {
    // Use a  HashMap for O(1) lookup time.
    const visitedNums = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // If we find a value already in the Hash Table, then return true
        if (visitedNums[num]) {
            return true;
            // If the value is not in the Hash Table, place it in the Hash Table and set it to True
        } else {
            visitedNums[num] = true;
        }
    }
    // If We did find any duplicates, return false
    return false;
};

module.exports = containsDuplicate;


/*
Time Complexity: O(N) - We go through every element in the input Array
Space Complexity: O(n) - Number of keys in Hash Table (Object) is equal to the number of unique values in the input Array
*/