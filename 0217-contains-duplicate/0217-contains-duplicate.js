/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
  // nums = [1,2,3,1], Output: true
  // nums = [1,2,3,4], Output: false
  // nums = [1,1,1,3,3,4,3,2,4,2] Output:true

  // nums 배열 루프를 돌면서 최소 2번 나올 경우에는 true를 리턴해야함

  return nums.length != new Set(nums).size;
};
