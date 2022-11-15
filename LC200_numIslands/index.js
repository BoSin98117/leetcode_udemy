/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. 

Example 1:
Input: grid = [
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]
]
Output: 3 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/


function numIslands(grid) {
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                count++;
                dfs(grid, row, col);
            }
        }
    }

    function dfs(grid, row, col) {
        if (row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] === "0") {
            return;
        }

        // Make the cell equal to 0 if the If Statement conditions above fail.
        grid[row][col] = "0";

        // Check if the cells ABOVE, BOTTOM, RIGHT, LEFT are equal to 1 and assign 0's to them.
        dfs(grid, row - 1, col);
        dfs(grid, row + 1, col);
        dfs(grid, row, col - 1);
        dfs(grid, row, col + 1);
    }

    return count;
}

module.exports = numIslands;


/*
Time Complexity: O(n) - IF you define N as number of cells in matrix.
Time Complexity: O(n * m) - IF you define N and M as height and width of matrix.
Space Complexity: O(1) - We only modify the Input Matrix.
*/