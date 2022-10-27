function problem2(cryptogram) {
  let answer = [];
  // 단어를 배열로 저장
  let wordArr = cryptogram.split("");

  // 삭제되지 않은 문자(answer)와 현재 문자(wordArr) 비교
  for (let i = 0; i < wordArr.length; i++) {
    if (answer[answer.length - 1] === wordArr[i]) {
      answer.pop();
    } else {
      answer.push(wordArr[i]);
    }
  }
  return answer.join("");
}

module.exports = problem2;
