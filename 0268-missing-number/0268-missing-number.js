/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const len = nums.length; 
    const expectedSum = (len*(len+1))/2; // 0부터 len까지 합계
    const actualSum = nums.reduce((acc,cur)=>acc+cur,0);
    return expectedSum - actualSum;
};