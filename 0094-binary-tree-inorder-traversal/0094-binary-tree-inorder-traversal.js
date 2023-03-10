/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  const data = [];
  let current = root;
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    data.push(node.val);
    if (node.right) traverse(node.right);
  };
  if (current) traverse(current); // 비어있지 않은 경우에만 traverse 호출
  return data;
};