/*
Given an m x n matrix, return all elements of the matrix in spiral order. 

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7] 

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

// Spiral Order
function spiralOrder(matrix) {
    // Create a results array to return
    const spiralArray = [];
    // If the matrix array is empty, just return.
    if (matrix.length === 0) return spiralArray;
    // Create top, bottom, left, right variables
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let dir = 'right';

    // Loop over the input matrix
    while (top <= bottom && left <= right) {
        if (dir === 'right') {
            // Right = Left -> Right
            for (let i = left; i <= right; i++) {
                spiralArray.push(matrix[top][i]);
            }
            top++   // move the direction Top to Down
            dir = 'down'    // Change direction to Down
        } else if (dir === 'down') {
            // Down = Top -> Bottom
            for (let i = top; i <= bottom; i++) {
                spiralArray.push(matrix[i][right]);
            }
            right--
            dir = 'left';
        } else if (dir === 'left') {
            // Left = Right -> Left
            for (let i = right; i >= left; i--) {
                spiralArray.push(matrix[bottom][i]);
            }
            bottom--
            dir = 'up';
        } else if (dir === 'up') {
            // Up = Bottom -> Top
            for (let i = bottom; i >= top; i--) {
                spiralArray.push(matrix[i][left]);
            }
            left++
            dir = 'right';
        }
    }
    return spiralArray;
}

module.exports = spiralOrder;

/*
Time Complexity: O(n) - Where N is the number of cells in Matrix.
Time Complexity: O(n * m) - Where N and M are length and width of Matrix.
Space Complexity: O(n) - SpiralArray has same number of elements in Matrix.
*/