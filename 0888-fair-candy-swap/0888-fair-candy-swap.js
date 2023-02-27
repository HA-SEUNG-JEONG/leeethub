/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = (aliceSizes, bobSizes) => {
  // aliceSizes[i]는 Alice가 가지고 있는 사탕 상자의 사탕 수
  // bobSize[j]는 Bob이 가지고 있는 j번째 사탕 상자의 사탕 수
  // 사탕 상자를 하나씩 교환 후에는 둘 다 같은 양의 사탕을 가지고 있어야 함
  // 한 사람이 가지고 있는 사탕의 총량은 그들이 가지고 있는 각각의 상자 안에 있는 사탕의 수를 합한 것
  // answer 배열을 리턴해야 함
  // answer[0] - Alice가 교환해야 하는 상자의 사탕 수
  // answer[1] - Bob이 교환해야 하는 상자의 사탕 수

  // Alice와 Bob이 가진 사탕의 총량
  const reduceAlice = aliceSizes.reduce((acc, cur) => acc + cur);
  const reduceBob = bobSizes.reduce((acc, cur) => acc + cur);

  // Alice와 Bob이 교환할 사탕의 양
  const diff = (reduceAlice - reduceBob) / 2;

  const setBob = new Set(bobSizes);
  for (let i = 0; i < aliceSizes.length; i++) {
    const target = aliceSizes[i] - diff; //Alice가 교환할 사탕의 양
    if (setBob.has(target)) return [aliceSizes[i], target];
  }
};