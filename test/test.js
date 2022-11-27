function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    const mid = Math.floor((left + right) / 2);
    console.log(nums[mid]);
}

findMin([5, 6, 0, 1, 2, 3, 4]);