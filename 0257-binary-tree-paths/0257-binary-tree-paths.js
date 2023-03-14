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
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  // 모든 root부터 leaf까지의 경로를 모두 리턴
  const paths = [];

  const dfs = (node, path) => {
    if (!node) return;
    path += node.val;

    if (!node.left && !node.right) {
      paths.push(path);
      return;
    }
    path += "->";
    dfs(node.left, path);
    dfs(node.right, path);
  };

  dfs(root, "");
  return paths;
}