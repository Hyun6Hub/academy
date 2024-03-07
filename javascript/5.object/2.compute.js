//객체 함수말고 다른곳으로 오면 정적으로 함수로 통해 접근하면 동적으로
//crud작업 객체 넣고빼고 없는거 만들어주는게 동적
//호출할땐 문자

let person = {
  name: "홍길동",
  age: 20,
  job: "개발자",
};
console.log("1", person.name);
console.log("2", person.age);

console.log("-------------------");

// TODO : getValue 함수를 통해 person value 출력
// function getValue(object, key) {
//   return object[key];
// }
const setValue = (object, key, value) => (object[key] = value); // !Create
const getValue = (object, key) => object[key]; // !Read
const updateValue = (object, key, newValue) => (object[key] = newValue); // !Update
const deleteValue = (object, key) => delete object[key]; // !Delete

setValue(person, "address", "seoul");
console.log("3", getValue(person, "job"));
console.log("4", getValue(person, "address"));
updateValue(person, "address", "부산");
deleteValue(person, "address");
console.log("5", person);
