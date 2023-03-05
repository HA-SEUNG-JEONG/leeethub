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
  for (let i = 0; i < operations.length; i++) {
    if (!isNaN(operations[i])) {
      result.push(Number(operations[i]));
      sum += Number(operations[i]); //sum에 더해줘야 함
    } else if (operations[i] === "C") {
      const removed = result.pop(); // pop해서 변수에 할당 필요
      sum -= removed;
    } else if (operations[i] === "D") {
      const lastElement = result[result.length - 1];
      // pop이 아니라 가장 마지막 요소 ,pop을 쓰면 기존 배열에서 제거되기 때문에 이전 배열을 유지하도록 해야함
      const doubled = 2 * lastElement;
      result.push(doubled);
      sum += doubled;
    } else if (operations[i] === "+") {
      const first = result[result.length - 1];
      const last = result[result.length - 2];
      const added = first + last;
      result.push(added);
      sum += added;
    }
  }
  return sum;
};