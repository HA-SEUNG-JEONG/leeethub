/**
 * @param {string[]} operations
 * @return {number}
 */
  // operations[i]는 record에 들어가야 하는 i번째 operation
  // + : 이전 2개의 점수 합
  // D : 이전 점수의 2배
  // C : 유효하지 않은 이전 점수, record에서 제거
const calPoints = (operations) => {
  const result = [];
  
  const getScore = (operation) => {
    const score = Number(operation);
    result.push(score);
    return score;
  };
  
  const doubleLastScore = () => {
    const last = result[result.length - 1];
    const doubled = last * 2;
    result.push(doubled);
    return doubled;
  };
  
  const sumLastTwoScores = () => {
    const lastTwoResult = result.slice(-2);
    const [lastResult1, lastResult2] = lastTwoResult;
    const added = lastResult1 + lastResult2;
    result.push(added);
    return added;
  };
  
  const removeLastScore = () => {
    const removed = result.pop();
    return -removed;
  };
  
  let sum = 0;
  
  operations.forEach((operation) => {
    switch (operation) {
      case "C":
        sum += removeLastScore();
        break;
      case "D":
        sum += doubleLastScore();
        break;
      case "+":
        sum += sumLastTwoScores();
        break;
      default:
        sum += getScore(operation);
        break;
    }
  });
  
  return sum;
};