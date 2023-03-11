/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  //소문자 또는 대문자로 구성된 문자열이 주어지면 해당 문자로 작성할 수 있는 가장 긴 회문의 길이를 반환
  // 문자는 대소문자를 구분하는데,
  // 예를 들어, "Aa"는 여기서 회문으로 간주되지 않는다.
  let ans = 0;
  const keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};
