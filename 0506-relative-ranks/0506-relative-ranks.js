/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
  //size n인 array [score]
  // score[i]는 i번째 운동선수의 점수, 단 모든 점수는 unique
  //   The 1st place athlete's rank is "Gold Medal".
  //   The 2nd place athlete's rank is "Silver Medal".
  //   The 3rd place athlete's rank is "Bronze Medal".
  //   For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

  // 크기 n인 배열을 반환해라. 여기서 answer[i]는 i번째 선수의 순위

  // n === score.length

  // input = [5,4,3,2,1]
  // output = ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

  const scoreSet = new Set(score);
  const sortedScore = [...score].sort((a, b) => b - a);

  const ranks = new Array(score.length);
  for (let i = 0; i < score.length; i++) {
    const rank = sortedScore.indexOf(score[i]) + 1;
    switch (rank) {
      case 1:
        ranks[i] = "Gold Medal";
        break;
      case 2:
        ranks[i] = "Silver Medal";
        break;
      case 3:
        ranks[i] = "Bronze Medal";
        break;
      default:
        ranks[i] = rank.toString();
        break;
    }
  }
  return ranks;
};