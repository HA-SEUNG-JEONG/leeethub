/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax=(nums)=>{
    // 주어진 배열에서 세번째로 큰 숫자 고르기
    // let maxNum = 0;
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i+1]<nums[i]) {
    //         maxNum = nums[i+1];
    //     }
    // }
    // return maxNum;
    nums.sort((a,b)=>b-a);
    const uniqueNums = [...new Set(nums)];
    return uniqueNums.length<3?uniqueNums[0]:uniqueNums[2]; //uniqueNums 길이가 3보다 작으면 맨 첫번째 요소 반환하고 아니면 마지막 요소
};