// Number 클래스의 메소들
// 원시타입, 참조타입 모두 Number 클래스의 메소드를 호출가능
let num1 = 12345;
const num2 = new Number(123);
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);
console.log(num1 === num2);
console.log(num1 === num2.valueOf());
console.log(num1.toLocaleString());  // 세자리 숫자를 구분하여 콤마(,)

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
num1 = 123.45;
console.log(num1.toFixed());  // 실수를 정수로 반올림
console.log(num1.toPrecision(3));
