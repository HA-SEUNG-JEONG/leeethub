/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = (operations) => {
  // operations[i]는 record에 들어가야 하는 i번째 operation
  // + : 이전 2개의 점수 합
  // D : 이전 점수의 2배
  // C : 유효하지 않은 이전 점수, record에서 제거
  const result = [];
  let sum = 0;
  operations.forEach((operation) => {
    switch (operation) {
      case "C":
        sum -= result.pop();
        break;
      case "D":
        const last = result[result.length - 1];
        const doubled = last * 2;
        result.push(doubled);
        sum += doubled;
        break;
      case "+":
        const lastTwoResult = result.slice(-2);
        const [lastResult1, lastResult2] = lastTwoResult;
        const added = lastResult1 + lastResult2;
        result.push(added);
        sum += added;
        break;
      default:
        const score = Number(operation);
        result.push(score);
        sum += score;
        break;
    }
  });
  return sum;
};