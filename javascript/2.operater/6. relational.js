//비교 연산자 <-> if, while, ...
// = 같다
// >
// <
// >= 크거나 같다
// <= 같거나 같다
console.log(2 < 3); //true
console.log(2 > 3); //false
console.log(2 >= 3); //false
console.log(2 <= 3); //true
console.log(2 == 3); //false 값
console.log(2 === 3); //false 타입까지
console.log(2 != 3); //true
console.log(2 !== 3); //true
console.log("3" == 3); //true
console.log("3" === 3); //false
console.log("-------------------");
let obj1 = {
  name: "홍길동",
};
let obj2 = {
  name: "홍길동",
};
let obj3 = obj1;

console.log(obj1 == obj2); //메모리 주소가 서로 다름 false
console.log(obj1 === obj2); //메모리 주소가 서로 다름 false

// 값만 비교하는게 ==
// ===
