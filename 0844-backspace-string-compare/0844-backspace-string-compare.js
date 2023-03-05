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
  return arr1.join("") === arr2.join("");
};

// 다른풀이
// const process = s => {
//     const res = [];
//     for (const item of s.split('')) {
//         item === '#' ? res.pop() : res.push(x);
//     }
//     return res.join('')
// }

// const backspaceCompare = (s, t) => process(s) == process(t);