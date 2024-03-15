// key와 value를 쌍으로 가지는 클래스
// set(key, value) : 데이터 추가
// get(key) : 데이터 출력
// has(key) : key에 해당하는 데이터 유무 확인 -> boolean
// delete(key) : 데이터 삭제
// iterable object : for...of, spread, ..

const fruitsList = new Map();

// 추가
fruitsList.set("apple", "🍎"); // set은 key, value
console.log("1", fruitsList);

// 찾기
console.log("2", fruitsList.get("apple"));

// 존재확인
console.log("3", fruitsList.has("orange"));

// 삭제
fruitsList.delete("apple");

console.log("4", fruitsList);
