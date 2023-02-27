/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
  // 입력받은 배열에서 가장 큰 요소가 다른 모든 요소보다 최소 2배 이상 큰 지 확인
  // 있으면 가장 큰 요소의 index를 반환하고 아니면 -1을 반환
  const len = nums.length;
  let maxIndex = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }
  for (let i = 0; i < len; i++) {
    if (i !== maxIndex && nums[maxIndex] < 2 * nums[i]) return -1;
  }
  return maxIndex;
};