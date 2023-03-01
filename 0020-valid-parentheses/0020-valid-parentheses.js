/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const openToClose = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (const char of s) {
    if (openToClose[char]) stack.push(char);
    else {
      const lastOpen = stack.pop();
      if (openToClose[lastOpen] !== char) return false;
    }
  }
  return stack.length === 0;
};