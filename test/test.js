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

        // console.log("windowCharsMap[endChar] = " + windowCharsMap[endChar]);

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

console.log(lengthOfLongestSubstring("abcabcbberyt"));