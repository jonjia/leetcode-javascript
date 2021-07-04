const preorder = (root) => {
  const result = [];
  function traverse(node) {
    if (!node) return;
    result.push(node.val);
    if (node.children) {
      node.children.forEach((child) => traverse(child));
    }
  }
  traverse(root);
  return result;
};
