/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. 

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1 

Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

// Helper function to locate the minimum value in a roatated sorted array.
function findMinIdx(rotatedSortedArr) {
    let left = 0;
    let right = rotatedSortedArr.length - 1;

    if (rotatedSortedArr.length === 1) { return 0; }

    // If the value at left(index[0]) is less than the value at right(index[arr.length - 1]), then it is a properly sorted array so the MIN INDEX = index[0]
    if (rotatedSortedArr[left] < rotatedSortedArr[right]) { return 0; }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // If mid < mid - 1, then we know that this is where the pivot point is.
        if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) { return mid; }
        // If mid > mid + 1, then we know that the pivot is mid + 1.
        if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) { return mid + 1; }

        // If the 2 If Statements above does not locate the Min value, we need to move the right pointer down.
        if (rotatedSortedArr[mid] < rotatedSortedArr[left]) {
            right = mid - 1;
            // Else move the left up 1, mid + 1.
        } else {
            left = mid + 1;
        }
    }
}


// Helper function for Binary Search
function binarySearch(nums, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function search(nums, target) {
    const minIdx = findMinIdx(nums);

    // We will get the index number
    const left = binarySearch(nums, target, 0, minIdx - 1);
    const right = binarySearch(nums, target, minIdx, nums.length - 1);

    // Return the largest value between left and right because it is our index value.  We return -1 if the value is not found.  If the value if found, most likely it will be between index[0] to index[array.length - 1] which will always be greater than -1.
    return Math.max(left, right);
}

module.exports = search;


/*
Time Complexity: O(log n) - We performed multiple Binary Searches
Space Complexity: O(1)
*/