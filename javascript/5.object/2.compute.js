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
const getValue = (object, key) => object[key]; // !Read 읽는거니까 value없음
const updateValue = (object, key, newValue) => (object[key] = newValue); // !Update
const deleteValue = (object, key) => delete object[key]; // !Delete key만으로도 키 밸류 한쌍 지울수있음

setValue(person, "address", "seoul"); // person 오브젝트 address key, seoul이 value로감 //셋이 설정 겟은 가져옴

console.log("3", getValue(person, "job")); //키가지고 밸류 가져올수있음 반대로는 안됨

console.log("4", getValue(person, "address"));

updateValue(person, "address", "부산");

deleteValue(person, "address"); //키로 설정해서 값을 넣음 adress지우면 키밸류값 지워짐  //지우면 터미널에서 부산나옴 딜리트밸류가 업데이트부산 지워줌

console.log("5", person); //오브젝트에 키를 등록해서 값을 넣는다
