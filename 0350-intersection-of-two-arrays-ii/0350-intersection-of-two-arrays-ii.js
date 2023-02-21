/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map();
  const result = [];

  // Populate the frequency map for nums1
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }


  // Iterate over nums2 and check if each element is in the map
  for (const num of nums2) {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
};