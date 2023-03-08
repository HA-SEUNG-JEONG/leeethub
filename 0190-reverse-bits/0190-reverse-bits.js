/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  console.log(n.toString(2));
  const binaryStr = n.toString(2).padStart(32, "0");
  const reversedBinaryStr = binaryStr.split("").reverse().join("");
  return parseInt(reversedBinaryStr, 2);
};