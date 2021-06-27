const isValidBST = (root) => {
  return check(root).isValid;
};

const check = (root) => {
  if (root === null)
    return { isValid: true, minVal: Infinity, maxVal: -Infinity };
  const left = check(root.left);
  const right = check(root.right);
  const result = {};
  result.isValid =
    left.isValid &&
    right.isValid &&
    left.maxVal < root.val &&
    right.minVal > root.val;

  result.minVal = Math.min(left.minVal, root.val, right.minVal);
  result.maxVal = Math.max(left.maxVal, root.val, right.maxVal);
  return result;
};
