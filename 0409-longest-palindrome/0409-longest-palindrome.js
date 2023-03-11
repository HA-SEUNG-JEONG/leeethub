/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  //소문자 또는 대문자로 구성된 문자열이 주어지면 해당 문자로 작성할 수 있는 가장 긴 회문의 길이를 반환
  // 문자는 대소문자를 구분하는데,
  // 예를 들어, "Aa"는 여기서 회문으로 간주되지 않는다.
  const countMap = new Map();
  let odd = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }
  //   console.log(countMap); // { 'a' => 1, 'b' => 1, 'c' => 4, 'd' => 2 }
  let len = 0;
  for (const item of countMap.values()) {
    if (item % 2 === 0) len += item;
    else {
      len += item - 1;
      odd = 1; // 회문 돌 때 한번은 필요함
    }
  }
  return len + odd;
};
