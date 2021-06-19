const evalRPN = (tokens) => {
  const numberStack = [];
  const OPERATORS = ["+", "-", "*", "/"];
  for (let token of tokens) {
    if (OPERATORS.includes(token)) {
      const numberOne = numberStack.pop();
      const numberTwo = numberStack.pop();
      numberStack.push(eval(`parseInt((${numberTwo})${token}(${numberOne}))`));
    } else {
      numberStack.push(Number(token));
    }
  }

  return numberStack[0];
};
