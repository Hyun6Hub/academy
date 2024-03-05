// 숫자 2개를 더한 결과를 출력
// calculator(2, 5, '+');

function add(num1, num2) {
  return num1 + num2;
}

function calculator(num1, num2, op) {
  let result = 0;

  if (op === "+") {
    result = add(num1, num2);
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    result = num1 / num2;
  }

  return result;
}

let result = calculator(100, 200, "+");
console.log(`호출한 함수결과값 : ${result}`);
console.log(`호출한 함수결과값 : ${add(100, 100)}`);
