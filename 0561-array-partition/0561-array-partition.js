/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const numsLen = nums.length;
  const sortedArr = nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < numsLen; i += 2) {
    sum += sortedArr[i];
  }

  return sum;
};