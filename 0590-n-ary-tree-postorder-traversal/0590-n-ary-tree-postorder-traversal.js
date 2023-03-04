/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = (root) => {
  const arr = [];
  const traverse = (node) => {
    if (node === null) return;

    for (const child of node.children) {
      traverse(child);
    }
    arr.push(node.val);
  };
  traverse(root);
  return arr;
};