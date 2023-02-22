/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // g - children
    // s - cookies
    g.sort((a, b) => a - b); // sort g in non-decreasing order
  s.sort((a, b) => a - b); // sort s in non-decreasing order
  let i = 0; // pointer for g
  let j = 0; // pointer for s
  let content = 0; // counter for content children
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) { // if s[j] can satisfy g[i], increment content and move to next child
      content++;
      i++;
    }
    j++; // move to next cookie regardless
  }
  return content;
};