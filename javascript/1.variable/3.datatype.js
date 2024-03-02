// let a = 10; //정수형변수
// console.log(a);
// a = 10.0; //실수형 변수
// console.log(a);
// a = "10";
// console.log(a);

// a = true;
// console.log(a);

// let b = null; //참조변수
// console.log(b[0]);
// b = [1, 2, 3];
// console.log(b);
// console.log(b[0]);

//문자열 데이터타입
let myName = "'수박'";
console.log(myName);

//불리언 데이터타입 - !! 특정한 데이터타입을 불리언타입으로 변환
let istrue = !false;
istrue = !true;
istrue = !!0;
istrue = !!1;
if (istrue === 0) istrue = false;
else istrue = true;
console.log(istrue);

//객체 타입
let obj1 = {
  // obj1에는 힙에 생성된 객체의 주소가 들어감
  name: "홍길동",
  aga: 20,
}; //객체타입: 프로퍼티: 값
let obj2 = [1, 2, 3]; //배열 : 인덱스로 데이터 참조

console.log(obj1.name); //홍길동

console.log(obj2[1]);

//데이터 타입 비교
let x = 10;
let y = "10";
console.log(typeof x);
console.log(typeof y);
console.log(typeof typeof x) === (typeof y ? true : false);
console.log(typeof obj1);
console.log(typeof obj2);
console.log(typeof istrue);
