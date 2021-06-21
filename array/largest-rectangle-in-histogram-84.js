const largestRectangleArea = (heights) => {
  heights.push(0);
  let max = 0;
  const stack = [];
  for (const h of heights) {
    let accWidth = 0;
    while (stack.length > 0 && stack[stack.length - 1][1] >= h) {
      accWidth += stack[stack.length - 1][0];
      max = Math.max(max, accWidth * stack[stack.length - 1][1]);
      stack.pop();
    }
    stack.push([accWidth + 1, h]);
  }
  return max;
};
