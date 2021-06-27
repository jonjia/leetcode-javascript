const permuteUnique = (nums) => {
  const len = nums.length;
  const ans = [];
  const s = [];
  const used = [];
  const find = (index) => {
    if (index === len) {
      ans.push([...s]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {
        continue;
      }
      used[i] = true;
      s.push(nums[i]);
      find(index + 1);
      used[i] = false;
      s.pop();
    }
  };

  nums.sort((a, b) => a - b);
  find(0);
  return ans;
};
