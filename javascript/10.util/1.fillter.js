// filter
// words 배열의 데이터 중 6글자 이상의 데이터만 배열로 생성
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((text) => {
  // 체크 로직
  return text.length > 6;
});

const result2 = words.filter((text) => text.length > 6);

console.log("result", result);
console.log("result2", result2);
// ['exuberant', 'destruction', 'present']

// nums 배열의 데이터 중 짝수만 필터링
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNums = nums.filter((number) => !(number % 2));
const oddNums = nums.filter((number) => number % 2);
// const evenNums = nums.filter(number => {
//   if(!(number % 2)) {
//     return number;
//   }
// });
console.log(evenNums);
console.log(oddNums);

// employee 배열을 이용하여 사번을 생성 : 아이디_숫자6자리
const employee = ["spray", "elite", "exuberant", "destruction", "present"];
const id = employee.map((id) => {
  let number = Math.trunc(Math.random() * 1000000);
  if (!(number > 99999)) {
    number = 123456;
  }
  return id.concat("_", number); //`${id}_${number}`;
});
console.log(id);

// Iterator filter(callFn)
const numbers = [11, 20, 31, 40];
const nset = new Set(numbers);
console.log(nset);
// numbers ==> for...of와 filter를 이용하여 짝수값 출력
for (const number of numbers.filter((n) => !(n % 2))) {
  console.log(number);
}

console.log(nset.values());

// nset ==> for...of와 filter를 이용하여 짝수값 출력
// Set 객체를 Array로 변환하는 작업
//! let array = Array.from(nset);
//! array = [...nset];
// console.log(array);
for (const number of [...nset].filter((n) => !(n % 2))) {
  console.log(number);
}
