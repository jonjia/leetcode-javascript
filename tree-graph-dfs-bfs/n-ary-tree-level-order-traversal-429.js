const levelOrder = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [];
  queue.push([root, 0]);
  while (queue.length) {
    const [node, level] = queue.shift();
    result.push([node, level]);
    if (node && node.children)
      queue.push(...node.children.map((child) => [child, level + 1]));
  }

  const ans = [];
  for (let i = 0; i < result.length; i++) {
    const [node, level] = result[i];
    if (ans[level]) {
      ans[level].push(node.val);
    } else {
      ans[level] = [node.val];
    }
  }

  return ans;
};
