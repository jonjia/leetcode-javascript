const hash = {};
const generateParenthesis = (n) => {
  if (hash[n]) return hash[n];
  if (n === 0) return [""];
  const result = [];
  for (let k = 1; k <= n; k++) {
    const resultA = generateParenthesis(k - 1);
    const resultB = generateParenthesis(n - k);
    for (let a of resultA) {
      for (let b of resultB) {
        result.push(`(${a})${b}`);
      }
    }
  }
  hash[n] = result;
  return result;
};
