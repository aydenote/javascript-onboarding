function problem1(pobi, crong) {
  let answer;
  let pobiPoint = [];
  let crongPoint = [];
  let pobiMaxPoint = 0;
  let crongMaxPoint = 0;

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

  /** 각 자리 숫자의 합 중에 가장 큰 값 반환*/
  function pointSum(user) {
    const pointSum = [];
    for (let i = 0; i < user.length; i++) {
      pointSum.push(
        user[i]
          .toString()
          .split("")
          .reduce((a, b) => parseInt(a) + parseInt(b))
      );
    }
    return Math.max(...pointSum);
  }

  /** 각 자리 숫자의 곱 중에 가장 큰 값 반환*/
  function pointMul(user) {
    const pointMul = [];

    for (let i = 0; i < user.length; i++) {
      pointMul.push(
        user[i]
          .toString()
          .split("")
          .reduce((a, b) => parseInt(a) * parseInt(b))
      );
    }
    return Math.max(...pointMul);
  }

  // 각 사용자(포비, 크롱) 페이지 연산 결과 가장 큰 값 저장.
  pobiPoint.push(pointSum(pobi));
  pobiPoint.push(pointMul(pobi));
  crongPoint.push(pointSum(crong));
  crongPoint.push(pointMul(crong));
  pobiMaxPoint = Math.max(...pobiPoint);
  crongMaxPoint = Math.max(...crongPoint);

  // 각 유저가 가지고 있는 가장 큰 값을 비교하여 answer에 값 저장.
  if (pobiMaxPoint > crongMaxPoint) {
    answer = 1;
  } else if (pobiMaxPoint < crongMaxPoint) {
    answer = 2;
  } else {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
