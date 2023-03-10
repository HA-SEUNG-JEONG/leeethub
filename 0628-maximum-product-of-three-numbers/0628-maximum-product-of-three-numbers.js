/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const postiveProduct = nums[len - 1] * nums[len - 2] * nums[len - 3];
  const negativeProduct = nums[0] * nums[1] * nums[len - 1];
  return Math.max(postiveProduct, negativeProduct);
};
