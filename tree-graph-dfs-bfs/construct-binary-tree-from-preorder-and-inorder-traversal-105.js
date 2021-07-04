const buildTree = (preorder, inorder) => {
  function build(l1, r1, l2, r2) {
    if (l1 > r1) return null;
    const root = new TreeNode(preorder[l1]);
    let index = l2;
    while (inorder[index] !== root.val) index++;
    const leftSize = index - l2;
    root.left = build(l1 + 1, l1 + leftSize, l2, index - 1);
    root.right = build(l1 + leftSize + 1, r1, index + 1, r2);
    return root;
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
