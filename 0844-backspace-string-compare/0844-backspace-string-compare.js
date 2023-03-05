/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
 // # : 이전 문자를 지움
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") arr1.pop();
    else arr1.push(s[i]);
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") arr2.pop();
    else arr2.push(t[i]);
  }
  //   // 두 배열을 비교하여 문자열이 같은지 여부를 반환
  //   if (arr1.length !== arr2.length) return false;

  //   for (let k = 0; k < arr1.length; k++) {
  //     if (arr1[k] !== arr2[k]) return false;
  //   }
  //   return true;
  return arr1.join("") === arr2.join("");
};