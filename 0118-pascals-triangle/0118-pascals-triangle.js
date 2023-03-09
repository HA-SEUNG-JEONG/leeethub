/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  // 파스칼 삼각형의 첫번째 numsRow 반환
  //   const dp = [[1], [1, 1]];

  //   // 두 값을 더하고 양쪽에 1을 추가
  //   // 각 숫자는 다음과 같이 바로 위에 있는 두 숫자의 합

  //   const result = [];
  //   for (let i = 2; i < numRows; i++) {
  //     const cur = [1]; // 맨 앞 배열을 [1]로 초기화

  //     for (let j = 1; j < i; j++) {
  //       cur.push(dp[i - 1][j - 1] + dp[i - 1][j]);
  //     }
  //     cur.push(1); // 맨 뒤에 1 집어넣기
  //     dp.push(cur);
  //   }
  //   for (let i = 0; i < numRows; i++) {
  //     const row = dp[i];
  //     result.push(row);
  //   }
  //   return result;
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const prev = result[i - 1] || [];
    const curr = [1];

    for (let j = 1; j < i; j++) {
      curr.push(prev[j - 1] + (prev[j] || 0));
    }
    if (i > 0) curr.push(1);
    result.push(curr);
  }
  return result;
};