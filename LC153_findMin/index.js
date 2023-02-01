/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time. 

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
*/


function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    // If there is only 1 item, then return that item
    if (nums.length === 1) {
        return nums[0];
    }

    // If the 1st item is less than the last item, then return the 1st item because the array is sorted.
    if (nums[left] < nums[right]) {
        return nums[left];
    }

    // Else, we have a rotated sorted array
    // Perform Binary Search to locate the minimum value.
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const leftVal = nums[left];
        const midVal = nums[mid];
        const leftOfMid = nums[mid - 1];
        const rightOfMid = nums[mid + 1];

        if (midVal > rightOfMid) {
            return rightOfMid;
        } else if (leftOfMid > midVal) {
            return midVal;
        }

        if (midVal > leftVal) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

module.exports = findMin;


/*
Time Complexity: O(log n) - We performed Binary Search
Space Complexity: O(1) - 
*/