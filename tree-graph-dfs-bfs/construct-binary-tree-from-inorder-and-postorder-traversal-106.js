const buildTree = (inorder, postorder) => {
  function build(l1, r1, l2, r2) {
    if (l1 > r1) return null;
    const root = new TreeNode(postorder[r2]);
    let index = l1;
    while (inorder[index] !== root.val) index++;
    const rightSize = r1 - index;
    root.left = build(l1, index - 1, l2, r2 - 1 - rightSize);
    root.right = build(index + 1, r1, r2 - rightSize, r2 - 1);
    return root;
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
