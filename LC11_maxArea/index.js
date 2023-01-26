/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container. 

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1 

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/


function maxArea(height) {
    let maxArea = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        // Area = Height * Width
        // Math.min(height[start], height[end]) - we want the smallest height when calculating.  Using the bigger height will spill the water over.
        // * (end - start) - End minus Start means that we want to calculate the area between the start and end only.  Start and End can be in any position.
        const currentArea = Math.min(height[start], height[end]) * (end - start);
        maxArea = Math.max(currentArea, maxArea);

        // Move START up by one and END down by one after each iteration.
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return maxArea;
}

module.exports = maxArea;

/*
Time Complexity: O(n) - Each number in input Array is visited once.
Space Complexity: O(1) - 
*/