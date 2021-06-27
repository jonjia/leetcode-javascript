const minDepth = (root) => {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;
  return (
    Math.min(
      root.left ? minDepth(root.left) : Infinity,
      root.right ? minDepth(root.right) : Infinity
    ) + 1
  );
};
