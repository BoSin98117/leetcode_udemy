const isValid = s => {
    let stack = [];
    let pairsHashMap = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        console.log("char = " + char);

        if (pairsHashMap[char]) {
            stack.push(char);

            console.log("pairsHashMap[char] = " + pairsHashMap[char]);
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false;
        }

        console.log("stack = " + stack + "\n");
        // console.log("stack.pop = " + pairsHashMap[stack.pop()] + "\n");
    }

    return stack.length === 0;
};

console.log(isValid("([{}])"));