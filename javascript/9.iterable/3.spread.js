// Spread(전개구문)
// 모든 Iterable Object는 사용이 가능하다
// function(...iterableObj)
// [ ...iterableObj ]
// { ...iterableObj }
// ECMAScript 2018

function add(a, b, c) {
  return a + b + c;
}
console.log("1", add(1, 2, 3));

const numbers = [10, 20, 30];
console.log(add(numbers[0], numbers[1], numbers[2]));
console.log(add(...numbers));
console.log("-----------------");

function sum(...nums) {
  let total = 0;
  for (let value of nums) total += value; // total = total + value;
  return total;
}
const total1 = sum(1, 2, 3, 4, 5, 6, 100, 200);
const total2 = sum(100);
const total3 = sum(1, 2, 3, 4, 5);
console.log("1", total1);
console.log("2", total2);
console.log("3", total3);
console.log("-----------------");

const fruit1 = ["🍎", "🍊", "🍑"];
const fruit2 = ["🍓", "🍋"];
const fruitList1 = fruit1.concat("🥝", fruit2);
const fruitList2 = [...fruit1, "🥝", ...fruit2];
console.log("4", fruitList1);
console.log("5", fruitList2);

console.log("-----------------");
const hong = {
  name: "홍길동",
  age: 20,
  address: "서울",
};
const hongUpdate = {
  ...hong,
  job: "S/W 개발자",
};
console.log("6", "hong", hong);
console.log("7", "hongUpdate", hongUpdate);
