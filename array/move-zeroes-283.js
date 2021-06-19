const moveZeroes = (nums) => {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[n] = nums[i]; 
      n++;
    }
  }

  while (n < nums.length) {
    nums[n] = 0;
    n++;
  }

  return nums;
}

// Test
console.log(moveZeroes([0,1,0,3,12]));