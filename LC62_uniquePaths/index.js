/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down 

Constraints:
1 <= m, n <= 100
*/



function uniquePaths(m, n) {
    const dpMatrix = [];

    for (let row = 1; row <= n; row++) {
        dpMatrix.push([]);
    }
    // Fill out first row of dpMatrix
    for (let row = 0; row < n; row++) {
        dpMatrix[row][0] = 1;
    }
    // Fill out first col of dpMatrix
    for (let col = 0; col < n; col++) {
        dpMatrix[0][col] = 1;
    }

    // fill up the dpMatrix
    for (let row = 1; row < n; row++) {
        for (let col = 1; col < m; col++) {
            dpMatrix[row][col] = dpMatrix[row][col - 1] + dpMatrix[row - 1][col];
        }
    }

    return dpMatrix[dpMatrix.length - 1][m - 1];
}

module.exports = uniquePaths;

/*
Time Complexity: O(M * N) - 2 for loops
Space Complexity: O(M * N) - memo array
*/

/*
Get the value from the top dp[i -1][j]
Get the value from the left dp[i][j - 1]
dp[i][j] = dp[i -1][j] + dp[i][j - 1]
*/



/*
*******************ALTERNATE SOLUTION******************************************
    const memo = Array(m).fill(Array(n).fill(1));

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            // Fill up the 2d array with the values
            memo[row][col] = memo[row - 1][col] + memo[row][col - 1];
        }
    }
    // Return the value of the bottom right cell
    return memo[m - 1][n - 1];
*/