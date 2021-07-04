const letterCombinations = (digits) => {
  if (!digits) return [];
  const edges = {
    2: "abc",
    3: "edf",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];
  const s = [];
  function dfs(index) {
    if (index === digits.length) {
      result.push(s.join(""));
      return;
    }
    const number = digits[index];
    for (let char of edges[number]) {
      s.push(char);
      dfs(index + 1);
      s.pop();
    }
  }
  dfs(0);
  return result;
};
