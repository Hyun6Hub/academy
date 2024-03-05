// add 함수 생성
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2));
console.log(add());
console.log(add(1)); // NaN, undefined, null

const sum = add; // 주소값 복사
console.log(sum(1, 2));
console.log(sum());
console.log(sum(1)); // NaN, undefined, null
