// Set
// Set 생성
let fList = new Set();
fList = new Set(['🍑', '🥝', '🍊']);
console.log(fList);

// 사이즈
console.log('size', fList.size);

// 데이터 추가
fList.add('🍎');
fList.add('🍎'); // Set은 중복배제

// 데이터 존재확인
console.log(fList.has('🍎'));

// keys, values, entries값 확인
console.log(fList.keys());
console.log(fList.values());
console.log(fList.entries());

// 순회 : forEach
// fList.forEach((item, key) => { console.log(`${key} --> ${item}`);});
fList.forEach(item => console.log(item));

// 순회 : for...of
for(let fruit of fList) console.log(fruit);
for(let key of fList.keys()) console.log('key', key);
for(let value of fList.values()) console.log('value', value); // default
for(let entry of fList.entries()) console.log('entry', entry);

// 데이터 삭제
fList.delete('🍎');

// 데이터 전체 삭제
fList.clear();

console.log(fList);