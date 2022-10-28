function problem4(word) {
  let answer = "";
  let wordArr = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    let wordAscii = wordArr[i].charCodeAt();
    if (wordAscii == 32) {
      answer += " ";
    } else if (wordAscii >= 65 && wordAscii <= 90) {
      answer += String.fromCharCode(90 - wordAscii + 65);
    } else if (wordAscii >= 97 && wordAscii <= 122) {
      answer += String.fromCharCode(122 - wordAscii + 97);
    } else {
      answer += "";
    }
  }
  return answer;
}

module.exports = problem4;
