/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  if (nums.length === 0) {
    return null;
  }

  const midIndex = Math.floor(nums.length / 2);
  const rootNode = new TreeNode(nums[midIndex]);

  rootNode.left = sortedArrayToBST(nums.slice(0, midIndex));
  rootNode.right = sortedArrayToBST(nums.slice(midIndex + 1));

  return rootNode;
};