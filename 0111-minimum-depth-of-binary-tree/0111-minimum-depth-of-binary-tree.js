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
 * @return {number}
 */
const minDepth = (root) => {
  // 최소 깊이 찾아내기
  if (root == null) return 0;
  if (root.right == null) return minDepth(root.left) + 1;
  if (root.left == null) return minDepth(root.right) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};