/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  // nums1를 순회하면서 특정 원소보다 큰 원소가 없으면 -1
  // 있으면 그 원소로 업데이트?
  const stack = [];
  const nextGreaterElement = new Map();

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      nextGreaterElement.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]); // [1]
  }

  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nextGreaterElement.has(nums1[i]))
      result.push(nextGreaterElement.get(nums1[i]));
    else result.push(-1);
  }
  return result;
};