function isPalindrome(s) {
    // Sanitize the input string (s)
    // \W - grab all NON-Alphanumeric characters such as SPACES, COMMAS, including underscores (_)
    // "" - means that we want to replace all NON-Alphanumeric characters with an empty string
    s = s.toLowerCase().replace(/[\W_]/g, "")


    // Create 2 pointers, left and right
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
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