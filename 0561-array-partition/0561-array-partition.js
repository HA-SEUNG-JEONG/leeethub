/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  // 2n개의 정수 배열이 주어짐
  // 모든 (a[i],b[i])의 합이 최대가 되도록 그룹화
  // 최대화된 합을 return
  // [1,4,3,2] 면
  // (1,4) (3,2)로 그룹화 한 다음 각각에 대한 min 값을 구해서 서로 더하기
  // (1,3) (2,4)로 그룹화 한 다음 각각에 대한 min 값을 구해서 서로 더하기
  // (1,2) (3,4)로 그룹화 한 다음 각각에 대한 min 값을 구해서 서로 더하기

  const numsLen = nums.length;
  const sortedArr = nums.sort((a, b) => a - b);
  //   console.log(sortedArr); // [ 1, 2, 2, 5, 6, 6 ]
  let sum = 0;

  sortedArr.forEach((sorted, index) => {
    if (index % 2 === 0) sum += sorted;
  });

  return sum;
};