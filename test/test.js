const threeSum = nums => {
    // Sort the array first so that we can achieve O(n^2) Time Comlexity.
    // (a, b) => a - b | This is a shorthand that sorts from least to greatest.
    nums.sort((a, b) => a - b);
    // Save results into an Array so we can return it.
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        // if (nums[i] === nums[i - 1]) {
        //     continue;
        // }

        console.log("nums[i] = " + nums[i]);

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[i], nums[left], nums[right]]);
                left++
                // This will skip the next index if it has the same value as the previous index.  
                // This will ensure that we do not push the same values into our RES ARRAY more than once.
                // *This only works if the ARRAY is SORTED
                while (nums[left] === nums[left - 1]) {
                    left++
                }
            } else if (nums[left] + nums[right] < target) {
                left++
            } else {
                right--
            }
        }
    }
    return res;
};

console.log(threeSum([0, 0, 0, 0, 0, 0, 0]));
// sorted array = [-4, -1, -1, 1, 1, 2]