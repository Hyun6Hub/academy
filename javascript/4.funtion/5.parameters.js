// 함수의 parameter, argument, 매개변수
// 0보다 큰 정수값을 입력받아 계산한 결과 출력
function add(a = 0, b = 0) {
  if (a <= 0 || b <= 0) {
    return "사용법 : a와 b는 0보다 큰 정수";
  }
  return a + b;
}

console.log(add(1, 2));
console.log(add());
console.log(add(-1, 10));
console.log(add(1, -10));

function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
  console.log(numbers[3]);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
