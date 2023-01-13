// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    // Create Object that contains all characters of string at the index they are located
    let windowCharsMap = {};

    let windowStart = 0;
    let maxLength = 0;  // Return the longest substring.

    for (let i = 0; i < s.length; i++) {
        // endChar will be character that we are currently on.
        const endChar = s[i];

        // See if the current index we are on has not been found in the sliding window
        // If it is found, then it's a duplicate
        if (windowCharsMap[endChar] >= windowStart) {
            // If there is a duplicate value found, then we create a new window where it would start at the next character.
            windowStart = windowCharsMap[endChar] + 1;
        }
        // If a duplicate is found, update the value of the index of that character
        windowCharsMap[endChar] = i;

        // i = end of window (endChar) | + 1 = array indices start at 0 so we add 1 to compensate.  i - windowStart + 1 = the sliding window.
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
}

module.exports = lengthOfLongestSubstring;

/*
Sliding Window Approach

Solve using O(n) time using the 'SLIDING WINDOW' approach 
Sliding window will represent the current substring of non repeating characters we are on.
We will NOT be working with Sliding Windows of Fixed Size.
The window will grow or shrink in size as we iterate through the string.
Current index and value in for loop will ALWAYS BE END of the sliding window.
As end of window increases, we conditionally increase start of window.

Time Complexity = O(n) - Each character of the string needs to be visited once.
Space Complexity = O(min(m, n)) - The number of keys in Hash Map is bounded by the size of the string n and the size of the charset/alphabet m.
O(min(m, n)) means that whichever is smaller, m or n.
*/


/*
*********************TESTING CODE*********************
function lengthOfLongestSubstring(s) {
    // Create Object that contains all characters of string at the index they are located
    let windowCharsMap = {};

    let windowStart = 0;
    let maxLength = 0;  // Return the longest substring.

    for (let i = 0; i < s.length; i++) {
        // endChar will be character that we are currently on.
        const endChar = s[i];

        console.log("s[i] = " + s[i]);

        // See if the current index we are on has not been found in the sliding window
        // If it is found, then it's a duplicate
        if (windowCharsMap[endChar] >= windowStart) {
            // If there is a duplicate value found, then we create a new window where it would start at the next character.
            windowStart = windowCharsMap[endChar] + 1;
        }

        // If a duplicate is found, update the value of the index of that character
        windowCharsMap[endChar] = i;

        console.log("windowStart = " + windowStart);
        console.log("windowCharsMap[endChar] = " + windowCharsMap[endChar]);
        console.log(windowCharsMap);
        console.log("\n");

        // i = end of window (endChar) | + 1 = array indices start at 0 so we add 1 to compensate.  i - windowStart + 1 = the sliding window
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
*/