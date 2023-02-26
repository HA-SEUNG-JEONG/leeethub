/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums=(nums)=>{
//누락된 숫자와 중복된 숫자 정보가 필요함
  // 빈 해시 테이블 생성
  // 중복된 변수, 누락된 변수를 각각 -1로 설정
  // 해시 테이블에 nums의 원소가 없으면 1(있는 값으로 설정)로 변경
  // 있으면 중복된 변수로 1로 재할당
  // nums를 순회하면서 누락된 숫자가 있을 경우 missing에다가 해당 인덱스 집어넣고 break

  const n = nums.length;
  const freq = {};
  let duplicate = 0,
    missing = 0;

  nums.forEach((num) => {
    if (!freq[num]) freq[num] = 1;
    else duplicate = num;
  });

  [...Array(n).keys()].some((index) => {
    if (!freq[index + 1]) {
      missing = index + 1;
      return true;
    }
  });


  return [duplicate, missing];
};