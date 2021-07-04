const lowestCommonAncestor = (root, p, q) => {
  const fatherMap = {};
  function calFather(node) {
    if (!node) return;
    if (node.left) {
      fatherMap[node.left.val] = node;
      calFather(node.left);
    }
    if (node.right) {
      fatherMap[node.right.val] = node;
      calFather(node.right);
    }
  }
  calFather(root);
  const redNodes = new Set();
  redNodes.add(root.val);
  while (p.val !== root.val) {
    redNodes.add(p.val);
    p = fatherMap[p.val];
  }

  while (!redNodes.has(q.val)) {
    q = fatherMap[q.val];
  }
  return q;
};
