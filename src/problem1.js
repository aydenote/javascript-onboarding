function problem1(pobi, crong) {
  let answer;

  /** 포비 페이지 번호 예외 처리 */
  for (let i = 0; i < pobi.length; i++) {
    if (pobi[1] - pobi[0] !== 1) {
      return -1;
    }
  }

  /** 크롱 페이지 번호 예외 처리 */
  for (let i = 0; i < crong.length; i++) {
    if (crong[1] - crong[0] !== 1) {
      return -1;
    }
  }
  return answer;
}

module.exports = problem1;
