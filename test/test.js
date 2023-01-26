const productExceptSelf = nums => {
    // Output Array will be all 1's
    let output = nums.map(n => 1);
    // Set product to 1 initially
    // This will be the accumulated value 
    let product = 1;

    console.log("nums   = " + nums);
    console.log("output = " + output + "  ***OUTPUT INITIAL***\n");

    // Multiply from the LEFT
    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product;
        // Mulitply product by the current number at nums[i]
        // Accumulated value of the LEFT
        product = product * nums[i];
    }

    console.log("nums   = " + nums);
    console.log("output = " + output + "   ***OUTPUT LEFT***\n");

    // Reset product to 1
    product = 1;

    // Multiply from the RIGHT
    for (let j = nums.length - 1; j >= 0; j--) {
        output[j] = output[j] * product;
        // Accumulated value of the RIGHT
        product = product * nums[j];
    }

    console.log("***Final OUTPUT RIGHT***")

    return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));