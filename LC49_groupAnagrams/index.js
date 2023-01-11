/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// 
function groupAnagrams(strs) {
    let grouped = {};
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split('').sort().join('');

        if (!grouped[key]) {
            grouped[key] = [];
        };

        grouped[key].push(word);
    }


    // OBJECT.VALUES(GROUPED) - If we pass in an OBJECT(GROUP), OBJECT.VALUES will return an ARRAY of the values in that object.  In this case, it will return an array of arrays.
    return Object.values(grouped);
}

module.exports = groupAnagrams;


/*
Time Complexity: O(N K log K) - Where N is number of strings, and K is length of strings
N = number of strings
K log K = the SORT method

Space Complexity: O(N K) - Data stored in our grouped Hash Table which is an object of arrays with key/value pairs
*/


