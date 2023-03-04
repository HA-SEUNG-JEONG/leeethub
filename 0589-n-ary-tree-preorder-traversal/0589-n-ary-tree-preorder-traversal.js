/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = (root) => {
  // Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
  const arr = [];
  const traverse = (node) => {
    if (node === null) return;

    arr.push(node.val);
    node.children.forEach((child) => traverse(child));
  };
  traverse(root);
  return arr;
};
