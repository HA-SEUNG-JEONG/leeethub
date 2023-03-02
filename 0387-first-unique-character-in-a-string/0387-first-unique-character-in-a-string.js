/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  // 처음으로 반복되지 않는 문자열을 찾고, 그에 대한 인덱스를 반환, 없으면 -1
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) return i;
  }
  return -1;
};
