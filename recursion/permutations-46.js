const permute = (nums) => {
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
      if (!used[i]) {
        used[i] = true;
        s.push(nums[i]);
        find(index + 1);
        used[i] = false;
        s.pop();
      }
    }
  };
  find(0);
  return ans;
};
