/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  // top까지 올라가는데 n 스텝씩
  // 매번 1 스텝 혹은 2스텝씩 올라갈 수 있음. 얼마나 많은 방법으로 top에 올라갈 수 있는지?
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};