// 비교 연산자 <-> if, while, ..
// ==  같다
// >
// <
// >=  크거나 같다
// <=  작거나 같다
console.log(2 < 3); //  true
console.log(2 > 3); //  false
console.log(2 >= 3); //  false
console.log(2 <= 3); //  true
console.log(2 == 3); //  false
console.log(2 === 3); //  false
console.log(2 != 3); //  true
console.log(2 !== 3); //  true
console.log("3" == 3); //  true - 값만 비교
console.log(3 === 3); //  true - 값과 데이터 타입 함께 비교
console.log("3" === 3); //  false - 값과 데이터 타입 함께 비교

let obj1 = {
  name: "홍길동",
};

let obj2 = {
  name: "홍길동",
};

let obj3 = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 == obj3);
console.log(obj1 === obj3);
