function groupAnagrams(strs) {
    let grouped = {};
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split('').sort().join('');

        if (!grouped[key]) {
            grouped[key] = [];
        };

        console.log("Key = " + key);

        console.log("Word = " + word + "\n");

        grouped[key].push(word);
    }

    // OBJECT.VALUES(GROUPED) - If we pass in an OBJECT(GROUP), OBJECT.VALUES will return an ARRAY of the values in that object.  In this case, it will return an array of arrays.
    return Object.values(grouped);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]
));