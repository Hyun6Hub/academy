const x = 0;
const y = 0;
const obj1 = {
  x: x,
  y: y,
};
const obj2 = { x, y }; // 키와 밸류값의 변수명이 동일한 경우 키 생략가능
console.log("1", obj1);
console.log("2", obj2);

const pname = "홍길동";
const age = 20;
const job = "개발자";
const person = { pname, age, job };
console.log("3", person);

// TODO : name, age 값을 받아, 객체를 생성하여 리턴하는 함수정의
// function makeObj(name, age) {
//   return { name, age };
// }

// const makeObj = function (name, age) {
//   return {name, age};
// }

const makeObj = (name, age) => {
  return { name, age };
};

let employee = makeObj("홍길동", 20);
console.log("4", `employee.name : ${employee.name}`);
console.log("5", `employee.name : ${employee.age}`);

employee = makeObj("홍길순", "18");
console.log("6", `employee.name : ${employee.name}`);

console.log("7", employee);
