/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  // 처음으로 반복되지 않는 문자열을 찾고, 그에 대한 인덱스를 반환, 없으면 -1

  let result = -1;
  Array.from(s).forEach((char, index) => {
    if (s.indexOf(char) === s.lastIndexOf(char) && result === -1) result = index;
  });
  return result;
};
