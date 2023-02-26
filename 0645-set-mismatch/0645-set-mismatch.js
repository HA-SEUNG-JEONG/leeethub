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

  // 주어진 입력 배열로 테스트
  // freq에 num이 들어있지 않으면 freq[num]을 1로 설정
  // 들어있으면 duplicate, 즉 중복 숫자가 들어있는 것으로 판단하여 duplicate를 1로 넣기
  nums.forEach((num) => {
    if (!freq[num]) freq[num] = 1;
    else duplicate = num;
  });

  //nums를 돌면서 1부터 시작(문제에서 1부터 n까지)
  // freq[i]가 없으면 missing을 해당 인덱스로 재할당하고 break
  for (let i = 1; i <= n; i++) {
    if (!freq[i]) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
};