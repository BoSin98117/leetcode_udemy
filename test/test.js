function twoSum(arr, target) {
    // Create Hash Table Object to store each element that is visited from Input Array
    const numsVisited = {};
    // Create an array to return the indices of the values that add up to Target
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;
        // UNDEFINED - we make it undefined bc Javascript see's 0 as a falsy value.  So it we push to res[], the first index is 0, and Javascript will consider it falsy.  Making it undefined will resolve this.
        if (numsVisited[complement] !== undefined) {
            res.push(numsVisited[complement]);
            res.push(i);

            console.log("i = " + i);
            console.log("numsVisited[complement] = " + numsVisited[complement]);
        }
        numsVisited[num] = i;
        console.log(numsVisited);
        console.log("res[] = " + res);
    }

    return res;
}

console.log(twoSum([11, 2, 7, 15], 9));