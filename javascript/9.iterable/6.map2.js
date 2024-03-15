// Map 생성
const fList = new Map([
  ["apple", "🍎"],
  ["orange", "🍊"],
]);
console.log("1", fList);

// 사이즈 확인
console.log("2", "size", fList.size);

// 데이터 추가
fList.set("kiwi", "🥝");
// fList.set(['peach', '🍑']);

// 데이터 존재확인
console.log("4", "kiwi", fList.has("kiwi")); //has찾는다
console.log("5", "tomato", fList.has("tomato"));

// 데이터 찾기(출력)
console.log("6", fList.get("kiwi")); //찾고 출력함
console.log("7", fList.get("tomato"));

// 모든 데이터의 key 값들을 출력 : keys
console.log("8", "keys", fList.keys());

// 모든 데이터의 value 값들을 출력 : values
console.log("9", "values", fList.values());

// 모든 데이터의 key와 value를 배열로 출력 : entries
console.log("10", "entries", fList.entries());

console.log("------------------------");

// 순회 : forEach
// fList.forEach((value, key) => { console.log(`${key} ==> ${value}`);});
fList.forEach((value, key) => console.log("1-1", `${key} ==> ${value}`));

// 순회 : for...of
for (let element of fList) {
  // for of 쓰면 str과 map , fList는 map 객체를 순회하면서 element에 할당한다
  console.log("2", element);
}
for (let key of fList.keys()) {
  console.log("3", key);
}
for (let value of fList.values()) {
  console.log("4", value);
}
for (let obj of fList.entries()) {
  console.log("5", obj);
}

// 데이터 삭제
console.log("6", fList.delete("kiwi"));

// 전체 데이터 삭제
fList.clear();
console.log("7", fList);
