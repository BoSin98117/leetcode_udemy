/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin. 

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0 

Constraints:
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/

// Bottom Up Approach
// Dynamic Programming
function coinChange(coins, amount) {
    // Create a dynamic programming array (dpMinCoins) and set the size to 'amount + 1' because our array starts with index[0].
    // Set all the indices to Infinity
    let dpMinCoins = new Array(amount + 1).fill(Infinity);

    // Set the first index in the dynamic programming array to 0.
    dpMinCoins[0] = 0;

    // Loop through dpMinCoins array starting at index 1
    for (let i = 1; i < dpMinCoins.length; i++) {
        // Second for loop to loop through the 'coins' input array
        for (let j = 0; j < coins.length; j++) {
            // Value at each index of the 'coins' array
            const coinValue = coins[j];
            // Run only if the coinValue (the value at coins array index) is less than the amount at the index of dpMinCoins array
            if (coinValue <= i) {
                // Get the minimum value between 'dpMinCoins[i - coinValue] + 1' and 'dpMinCoins'.
                // dpMinCoins[i - coinValue] + 1 | the '1' means that we are using up 1 coin
                dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i]);
            }
        }
    }
    const answer = dpMinCoins[dpMinCoins.length - 1];
    return answer === Infinity ? -1 : answer;
}

module.exports = coinChange;

/*
Time Complexity: O(A * C) - Where A is the amount, and C is the number of Coins
Space Complexity: O(A) - We created a DP Array of length A
YouTube Explanation: https://www.youtube.com/watch?v=mSdNNaG5oPc
*/
