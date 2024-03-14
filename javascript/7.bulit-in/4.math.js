// Math class - static 메소드로 구성됨
let num1 = 123.56;

console.log(num1);
console.log(Math.abs(num1));  // 절대값
console.log(Math.floor(num1));  // 소수점 절삭
console.log(Math.trunc(num1));  // 소수점 절삭
console.log(Math.round(1.234));  // 소수점 반올림
console.log(Math.round(1.567));  // 소수점 반올림
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));
console.log(Math.random()); // 0 ~ 1 사이에 랜덤한 값을 생성

// 1~ 10 사이의 숫자를 랜덤하게 생성
const rNumber = Math.trunc(Math.random() * 10 + 1);
console.log(rNumber);

