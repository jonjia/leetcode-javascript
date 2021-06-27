const combine = (n, k) => {
  const ans = [];
  const s = [];
  const findSubsets = (index) => {
    if (s.length > k || s.length + n - index + 1 < k) return;
    if (index === n + 1) {
      ans.push([...s]);
      return;
    }
    findSubsets(index + 1);
    s.push(index);
    findSubsets(index + 1);
    s.pop();
  };
  findSubsets(1);
  return ans;
};
