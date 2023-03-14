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
    if (!node) return; // null인 경우, 탐색 중지
    path += node.val; // 경로에 현재 노드 값 추가

    if (!node.left && !node.right) {
      // leaf 노드인 경우
      paths.push(path); // 경로를 결과 배열에 추가
      return;
    }

    path += "->"; // 경로에 "->" 추가하여 자식 노드와 구분
    dfs(node.left, path); // 왼쪽 자식 노드 호출
    dfs(node.right, path); // 오른쪽 자식 노드 호출
  };

  dfs(root, ""); // 루트 노드에서부터 경로 탐색 시작
  return paths;
};