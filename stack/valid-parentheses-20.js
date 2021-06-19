const isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  const MAP = { "(": ")", "[": "]", "{": "}" };
  for (let char of s) {
    if (MAP[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (MAP[top] !== char) return false;
    }
  }

  return stack.length === 0;
};
