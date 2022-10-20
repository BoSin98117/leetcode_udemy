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
            sCharCounts[tChar]--
        }
    }
    return true;
}

module.exports = isAnagram;

/*
Time Complexity: O(n) 
Space Complexity: O(1) - Our hash table will have a maximum of 26 key-value pairs.
*/