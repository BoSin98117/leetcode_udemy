/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. 

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12. 

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 400
*/


function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // Subproblem
    // Set maxLootAtNth to the MAX between nums[0] and Math.max(nums[0], nums[1]
    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        /*  
            Update maxLootAtNth at each iteration
            Max loot at 3rd house is whichever is larger:
            Loot at 3rd house + max loot from 2 houses before 
            OR
            Max Loot from Previous House
        */
        maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1]));
    }
    // return last item of maxLoot array.
    return maxLootAtNth.pop();
}

module.exports = rob;


/*
Time Complexity: O(n) - Input Array is being looped over once
Space Complexity: O(n) - Create a maxLootAtNth array | Can be optimized to O(1) using 2 number variables

Example 1:
Input: [2,6,3]
maxLootAtNth: [2,6,?]
Max loot at 3rd house is whichever is larger:
    Loot at 3rd house + max loot from 2 houses before 
    OR
    Max Loot from Previous House
maxLootAtNth: [2,6,6]
return last item of maxLoot array (6)

Example 2:
Input: [2,6,5]
maxLootAtNth: [2,6,?]
Max loot at 3rd house is whichever is larger:
    Loot at 3rd house + max loot from 2 houses before 
    OR
    Max Loot from Previous House
maxLootAtNth: [2,6,7]
return last item of maxLoot array (7)
*/