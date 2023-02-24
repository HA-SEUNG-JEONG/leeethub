/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // 최대값과 최소값의 차이가 정확히 1이어야 함
//  const map = new Map();
//   let maxLength = 0;

//   for (let num of nums) {
//     map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
//   }

//   for (let [num, count] of map) {
//     if (map.has(num + 1))
//       maxLength = Math.max(maxLength, count + map.get(num + 1));
//   }

//   return maxLength;
    nums.sort((a, b) => a - b); // 배열을 오름차순으로 정렬
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < nums.length && nums[j] - nums[i] <= 1) {
      if (nums[j] - nums[i] === 1) { // 차이가 1이라면
        maxLength = Math.max(maxLength, j - i + 1); // 길이 갱신
      }
      j++;
    }
  }

  return maxLength;
};