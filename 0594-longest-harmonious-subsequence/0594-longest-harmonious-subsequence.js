/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // 최대값과 최소값의 차이가 정확히 1이어야 함
 const map = new Map();
  let maxLength = 0;

  for (let num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  for (let [num, count] of map) {
    if (map.has(num + 1))
      maxLength = Math.max(maxLength, count + map.get(num + 1));
  }

  return maxLength;
};