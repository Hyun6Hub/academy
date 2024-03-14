// Map 생성
const fList = new Map([['apple', '🍎'], ['orange','🍊']]);
console.log(fList);

// 사이즈 확인
console.log('size',fList.size);

// 데이터 추가
fList.set('kiwi', '🥝');
// fList.set(['peach', '🍑']);

// 데이터 존재확인
console.log('kiwi',fList.has('kiwi'));
console.log('tomato', fList.has('tomato'));

// 데이터 찾기(출력)
console.log(fList.get('kiwi'));
console.log(fList.get('tomato'));

// 모든 데이터의 key 값들을 출력 : keys
console.log('keys',fList.keys());

// 모든 데이터의 value 값들을 출력 : values
console.log('values',fList.values());

// 모든 데이터의 key와 value를 배열로 출력 : entries
console.log('entries', fList.entries());

// 순회 : forEach
// fList.forEach((value, key) => { console.log(`${key} ==> ${value}`);});
fList.forEach((value, key) =>  console.log(`${key} ==> ${value}`));

// 순회 : for...of
for(let element of fList) { console.log(element);}
for(let key of fList.keys()) { console.log(key);}
for(let value of fList.values()) { console.log(value);}
for(let obj of fList.entries()) { console.log(obj);}

// 데이터 삭제
console.log(fList.delete('kiwi'));

// 전체 데이터 삭제
fList.clear();
console.log(fList);