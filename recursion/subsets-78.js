const subsets = (nums) => {
  const ans = [];
  const s = [];
  const findSubsets = (index) => {
    if (index === nums.length) {
      ans.push([...s]);
      return;
    }

    findSubsets(index + 1);
    s.push(nums[index]);
    findSubsets(index + 1);
    s.pop();
  };
  findSubsets(0);
  return ans;
};
