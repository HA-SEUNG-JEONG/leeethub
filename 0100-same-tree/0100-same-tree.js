/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
if (!p && !q) return true; // 두 노드가 모두 null인 경우
  if (!p || !q) return false; // 두 노드 중 하나만 null인 경우
  if (p.val !== q.val) return false; // 노드의 값이 다른 경우
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // 좌우 하위 트리를 재귀적으로 비교
};