function problem3(number) {
  let answer = 0;

  /* 숫자를 자릿수별 배열로 저장 */
  for (let i = 1; i <= number; i++) {
    let numberArr = String(i).split("");
    /* 각 자릿수를 탐색하며 3, 6, 9 해당 시 answer 증가*/
    for (let j = 0; j < numberArr.length; j++) {
      if (numberArr[j] === "3" || numberArr[j] === "6" || numberArr[j] === "9")
        answer++;
    }
  }

  return answer;
}
module.exports = problem3;
