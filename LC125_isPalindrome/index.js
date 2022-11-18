/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. 

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. 

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/


function isPalindrome(s) {
    // Sanitize the input string (s)
    // \W - grab all NON-Alphanumeric characters such as SPACES, EXCLAMATION MARKS, etc..
    // '_' - Include underscores(_) as well.
    // "" - means that we want to replace all NON-Alphanumeric characters with an empty string
    s = s.toLowerCase().replace(/[\W_]/g, "")


    // Create 2 pointers, left and right
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        // Move Left pointer UP and Right pointer DOWN.
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;

/*
Time Complexity - O(n) - Iterate through the string
Space Complexity - O(1) - Left and Right pointers take up constant space
*/

/*
"A man, a plan, a canal: Panama"
After Sanitizing:
amanaplanacanalpanama
*/