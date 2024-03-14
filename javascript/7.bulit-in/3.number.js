// Number 클래스의 메소들
// 원시타입, 참조타입 모두 Number 클래스의 메소드를 호출가능
let num1 = 12345;
const num2 = new Number(123);
console.log("1", num1);
console.log("2", num2);
console.log("3", typeof num1);
console.log("4", typeof num2);
console.log("5", num1 === num2);
console.log("6", num1 === num2.valueOf());
console.log("7", num1.toLocaleString()); // 세자리 숫자를 구분하여 콤마(,)

console.log("8", Number.MAX_VALUE);
console.log("9", Number.MIN_VALUE);
num1 = 123.45;
console.log("10", num1.toFixed()); // 실수를 정수로 반올림
console.log("11", num1.toPrecision(3));
