/*
  iterable => Iteration Protocol 
  iterable object => 순회가 가능한 객체 : String, Array, Map, Set... -> new Array()
  for...of, spread(...전개구문), destructure assignment(구조분해할당)..
  Map : (key,value), set, get, has, keys, values, entries, forEach..
  Set : (value:unique value), add, get, has, keys, values, entries, forEach..
*/
function display(...nums) {
  console.log(nums);
}
display(1, 2, 3, 4);
display(1, 2, 3, 4, 5);
display(1);

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];
console.log([...arr1, 4, ...arr2]);

function getName() {
  return { name: "홍길동", age: 20, address: "서울" };
}
const { address, name, age } = getName();
console.log(name, age, address);

const str = new String("Hello");
const text = "Hello";
for (let s of str) console.log(s);
for (let s of text) console.log(s);

const arr = [1, 2, 3];
for (const number of arr) console.log(number);
arr.forEach((number, index) => {
  console.log(`${index} --> ${number}`);
});

const array = [
  ["name", "홍길동"],
  ["age", 20],
];
const obj = { name: "홍길동", age: 20 };
const numberMap = new Map(array);
console.log(numberMap);
numberMap.set("addr", "서울");
console.log(numberMap.get("age"));
console.log(numberMap.has("age"));
console.log(numberMap.keys());
console.log(numberMap.values());
console.log(numberMap.entries());
for (const value of numberMap.keys()) {
  console.log(value);
}
// for(const value : numberMap.keys()) { console.log(value);}

const numberSet = new Set([1, 2, 1, 1, 10, 20]); // 중복되는 데이터 자체적으로 메시지없이 필터링!!!
console.log(numberSet);
numberSet.add(100);
console.log(numberSet.keys());
console.log(numberSet.values());
console.log(numberSet.entries());
