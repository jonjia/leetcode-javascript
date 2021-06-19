const removeDuplicates = (nums) => {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[n] = nums[i];
      n++;
    }
  }
  return n;
};

// Test
console.log(removeDuplicates([1,1,2]));