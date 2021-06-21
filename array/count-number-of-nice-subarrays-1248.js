const numberOfSubarrays = (nums, k) => {
  const sums = [0];
  for (let i = 1; i <= nums.length; i++) {
    sums[i] = sums[i - 1] + (nums[i - 1] % 2);
  }

  const count = new Array(sums.length).fill(0);
  for (let i = 0; i < sums.length; i++) {
    count[sums[i]]++;
  }

  let answer = 0;
  for (let i = 1; i < sums.length; i++) {
    const index = sums[i] - k;
    if (index >= 0) {
      answer += count[index];
    }
  }
  return answer;
};
