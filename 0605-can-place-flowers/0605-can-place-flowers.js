/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  // 인접한 곳에는 꽃을 심을 수 없음
  // 0과 1을 포함하는 정수 배열이 주어지면 0은 비어있음, 1은 채워져 있음
  // 인접하지 않은 꽃 규칙을 위반하지 않고 n개의 새 꽃을 화단에 심을 수 있는지 여부를 반환(boolean)

  // 꽃을 심을 수 있는 자리 찾기, 즉 배열을 돌면서 0 좌우에 다른 꽃이 없는 경우 찾기
  // 꽃을 심을 수 있는 자리가 있다면, 그 자리에 새 꽃을 심는다. 이때, 심은 꽃의 개수를 센다.
  // 모든 배열 요소를 검사한 후, 심은 꽃의 개수가 목표 꽃의 개수보다 크거나 같은지 확인한다. 만약 그렇다면 꽃을 심을 수 있는 경우이므로 true를 반환한다.
  // 그렇지 않으면 꽃을 심을 수 없는 경우이므로 false를 반환한다.
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    // 현재 위치의 꽃밭이 비어 있고, 그 꽃밭의 좌우 양쪽에도 꽃이 없는 경우
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
};