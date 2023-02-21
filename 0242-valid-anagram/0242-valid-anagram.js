/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const lookup = {};

  for (const item of s) {
    let letter = item;
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (const el of t) {
    let letter = el;
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }

  return true;
};
