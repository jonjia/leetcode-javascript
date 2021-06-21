const maxSlidingWindow = (nums, k) => {
  const queue = [];
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length > 0 && queue[0] <= i - k) queue.shift();
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i])
      queue.pop();
    queue.push(i);
    if (i >= k - 1) ans.push(nums[queue[0]]);
  }
  return ans;
};
