/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  const result = [];

  nums1.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  nums2.forEach((num) => {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  });
  return result;
};
