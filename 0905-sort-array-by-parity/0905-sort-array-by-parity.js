/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    if (nums[i] % 2 === 0) i++;
    if (nums[j] % 2 === 1) j--;
  }
  return nums;
};