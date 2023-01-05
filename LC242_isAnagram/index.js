/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false 

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/


function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // Create a Hash Map to keep a character count of each character.  
    // 'HELLO' = {H: 1, E: 1, L: 2, O: 1}
    const sCharCounts = {};

    // Fill up sCharCounts Hash Map
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
    }

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];
        // If there are no tChar in sCharCounts, then return false
        if (!sCharCounts[tChar]) {
            return false;
            // If there is a tChar in sCharCounts then decrement it by 1.  We do this because sometimes there are duplicate characters in a string.  
        } else {
            // 
            sCharCounts[tChar]--
        }
    }
    return true;
}

module.exports = isAnagram;

/*
Time Complexity: O(n) 
Space Complexity: O(1) - Our hash table will have a maximum of 26 key-value pairs because Leetcode will only pass in characters that are 'a - z' and they are LOWERCASE..
*/