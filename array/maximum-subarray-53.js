const maxSubArray = (nums) => {
  const sums = [0];
  for (let i = 1; i <= nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i - 1];
  }

  let max = -Infinity;
  let min = sums[0];
  for (let i = 1; i < sums.length; i++) {
    max = Math.max(max, sums[i] - min);
    min = Math.min(min, sums[i]);
  }

  return max;
};
