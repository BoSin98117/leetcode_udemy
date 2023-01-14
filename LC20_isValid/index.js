/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false 

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/


const isValid = s => {
    let stack = [];
    let pairsHashMap = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        //
        if (pairsHashMap[char]) {
            stack.push(char);
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false;
        }
    }

    return stack.length === 0;
};

module.exports = isValid;

/*
Time Complexity: O(n) - We iterate through the input string just once
Space Complexity: O(n) - In worst case, stack is same length as input string
*/