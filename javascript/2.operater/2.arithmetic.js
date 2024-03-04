// 산술 연산자
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지 연산자(모듈러)
// ** 지수 연산자(거듭제곱)
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2);

// 주의사항! +
// + 는 처음 시작부분이 문자열인 경우 '접합 연산자'
console.log("5" + 2);

//calculator()
function calculator() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  document.write(`num1 + num2 =  ${num1 + num2} <br>`);
  document.write("num1 + num2 = " + (num1 + num2) + "<br>");
  document.write("num1 - num2 = " + (num1 - num2) + "<br>");
  document.write("num1 * num2 = " + num1 * num2 + "<br>");
  document.write("num1 / num2 = " + num1 / num2 + "<br>");
  document.write("num1 % num2 = " + (num1 % num2) + "<br>");
  document.write("num1 ** num2 = " + num1 ** num2 + "<br>");
}
