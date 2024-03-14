// iteralbe(이터러블) Object --> Iteration Protocol : 순회를 위한 규칙, 조약, 약속
// for...of, ...(spread), 구조분해할당(destructing object)
// String, Array, Map, Set ...

// const text = 'Hello JavaScript!!!';
const text = new String('Hello JavaScript!!!');
for(let str of text)   console.log(str);
for(let i = 0; i < text.length; i++) {
  console.log('text[i] : ',text[i]);
}

// 1, 2, 3, 4, 5 개의 숫자를 가진 배열 생성 후, 콘솔에 출력
const numList = [1, 2, 3, 4, 5];
for(let number of numList) console.log(number);

// 숫자 100을 변수에 저장 출력 : for...of (??)
// !TypeError: num is not iterable
//     at file:///C:/dev/javascript/1.iterable.js:18:18
//     at ModuleJob.run (node:internal/modules/esm/module_job:218:25)

const num = 100;
for(let value of num) console.log(value);