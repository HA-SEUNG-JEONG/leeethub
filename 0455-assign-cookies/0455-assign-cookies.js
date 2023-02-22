/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
  // g - children
  // s - cookies
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let a = 0;
  let b = 0;
  let content = 0;
  while (a < g.length && b < s.length) {
    s[b] >= g[a] ? (a++, b++) : b++;
  }
  return a;
};