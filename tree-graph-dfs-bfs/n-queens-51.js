const solveNQueens = (n) => {
  const result = [];
  const used = new Array(n).fill(false);
  const usedIPlusJ = {};
  const usedIMinusJ = {};
  const s = [];
  function find(row) {
    if (row === n) {
      result.push(s.join(""));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!used[col] && !usedIPlusJ[row + col] && !usedIMinusJ[row - col]) {
        used[col] = true;
        usedIPlusJ[row + col] = true;
        usedIMinusJ[row - col] = true;
        s.push(col);
        find(row + 1);
        s.pop();
        used[col] = false;
        usedIPlusJ[row + col] = false;
        usedIMinusJ[row - col] = false;
      }
    }
  }
  find(0);
  const ans = [];
  for (let item of result) {
    const oneAns = [];
    for (let row = 0; row < n; row++) {
      const str = new Array(n).fill(".");
      const col = item[row];
      str[col] = "Q";
      oneAns.push(str.join(""));
    }
    ans.push(oneAns);
  }
  return ans;
};
