const findShortestSubArray = (nums) => {
  const countMap = {};
  for (let [i, number] of nums.entries()) {
    if (countMap[number]) {
      countMap[number][0]++;
      countMap[number][2] = i;
    } else {
      countMap[number] = [1, i, i];
    }
  }
  let maxNum = 0;
  let minLen = 0;
  for (const [count, left, right] of Object.values(countMap)) {
    if (maxNum < count) {
      maxNum = count;
      minLen = right - left + 1;
    } else if (maxNum === count) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
      }
    }
  }
  return minLen;
};
