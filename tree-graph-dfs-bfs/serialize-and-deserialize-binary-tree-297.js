const serialize = (root) => {
  const result = [];
  function traverse(node) {
    if (!node) {
      result.push("null");
      return;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result.join(" ");
};

const deserialize = (data) => {
  const nodes = data.split(" ");
  let index = 0;
  function create() {
    if (nodes[index] === "null") {
      index++;
      return null;
    }
    const node = new TreeNode(Number(nodes[index]));
    index++;
    node.left = create();
    node.right = create();
    return node;
  }
  return create();
};
