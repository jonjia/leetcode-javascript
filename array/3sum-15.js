const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const twoNums = twoSum(nums, -nums[i], i + 1);
    if (twoNums.length > 0) {
      ans.push(...twoNums.map(([num1, num2]) => [nums[i], num1, num2]));
    }
  }
  return ans;
};

const twoSum = (nums, target, start) => {
  const ans = [];
  let j = nums.length - 1;
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    while (i < j && nums[i] + nums[j] > target) j--;
    if (i < j && nums[i] + nums[j] === target) ans.push([nums[i], nums[j]]);
  }
  return ans;
};
