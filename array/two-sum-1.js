const twoSum = (nums, target) => {
  const sortedNums = nums
    .map((value, index) => [value, index])
    .sort((a, b) => a[0] - b[0]);
  let j = sortedNums.length - 1;
  for (let i = 0; i < sortedNums.length; i++) {
    while (i < j && sortedNums[i][0] + sortedNums[j][0] > target) j--;
    if (i < j && sortedNums[i][0] + sortedNums[j][0] === target)
      return [sortedNums[i][1], sortedNums[j][1]];
  }
};
