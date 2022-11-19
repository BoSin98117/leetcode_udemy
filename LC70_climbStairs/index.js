/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step 

Constraints:
1 <= n <= 45
*/


const climbStairs = n => {
    // Steps 1 - 3, the number of ways matches the input so just return what n is.
    if (n <= 3) { return n; }

    // Create an array of the number of different ways
    // Each index is the number of different combination of ways that we can step
    let ways = [0, 1, 2, 3];

    // Push the number of ways at each iteration
    for (let i = 4; i <= n; i++) {
        // Fibonacci Sequence here
        ways.push(ways[i - 1] + ways[i - 2]);
    }

    return ways[n]; // Can also write - return ways.pop()
};

module.exports = climbStairs;

/*
Time Complexity: O(n) - our code loops n times (for loop)
Space Complexity: O(n) - Array of size n is used (let ways = [0, 1, 2, 3];)

Fibinacci Sequence method
Solve for subproblems to see a pattern.

Steps   Ways    Combinations of Steps
1       1       [1]
2       2       [1,1] [2]
3       3       [1,2] [2,1] [1,1,1]
4       5       [1,1,2] [2,2] [1,2,1] [2,1,1] [1,1,1,1]
*/

/*
Alternate solution
Space Complexity: O(1) - we are not using an array to hold the values.

if (n === 1) {
    return n;
}

// Use pointer variables
let first = 1;
let second = 2;

for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
}
return second;
*/


/*
**************************************************************************************
SPACE COMPLEXITY - O(1) because we created a FIRST and SECOND variable INSTEAD OF ARRAY
**************************************************************************************
var climbStairs = function (n) {
    if (n === 1) {
        return n;
    }

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        const third = first + second;


        console.log("first = " + first);
        console.log("second = " + second);
        console.log("third = " + third + "\n");

        first = second;
        second = third;

        console.log("first = " + first);
        console.log("second = " + second);
        console.log("third = " + third + "\n\n");
    }

    return second;
};

console.log(climbStairs("7"));
*/