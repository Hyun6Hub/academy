// filter
// words 배열의 데이터 중 6글자 이상의 데이터만 배열로 생성
const words = ["spray", "elite", "exuberant", "destruction", "present"]; //words 문자열을 요소로받는 배열
const result = words.filter((text) => {
  // 체크 로직
  return text.length > 6; //6글자보다 많으면 참
});

const result2 = words.filter((text) => text.length > 6);

console.log("1", "result", result);
console.log("2", "result2", result2); //6글자 이상만 출력
// ['exuberant', 'destruction', 'present']

// nums 배열의 데이터 중 짝수만 필터링
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNums = nums.filter((number) => {
  return !(number % 2); //number는 참으로함 참은 1, 1%2 홀수, 홀수의 !는 짝수
});
const oddNums = nums.filter((number) => number % 2); //number는 참으로한다 나머지가0이라면
// const evenNums = nums.filter(number => {
//   if(!(number % 2)) {
//     return number;
//   }
// });
console.log("3", evenNums);
console.log("4", oddNums);
// 1은 true, 0은 false

// employee 배열을 이용하여 사번을 생성 : 아이디_숫자6자리
const employee = ["spray", "elite", "exuberant", "destruction", "present"];
const id = employee.map((id) => {
  let number = Math.trunc(Math.random() * 1000000);
  //0~999999난수생성
  // math.trunc로 소수제거 0~99999정수
  if (!(number > 99999)) {
    number = 123456;
  }
  return id.concat("_", number); //`${id}_${number}`;
});
console.log("5", id);

// Iterator filter(callFn)
const numbers = [11, 20, 31, 40];
const nset = new Set(numbers);
console.log("5", nset);
// numbers ==> for...of와 filter를 이용하여 짝수값 출력
for (const number of numbers.filter((n) => !(n % 2))) {
  // n%2는 홀수다 n자체가 홀수여서 나누기2하면 나머지 1나옴
  console.log("6", number);
}

console.log("7", nset.values());
// nset는 set객체를 가리키는변수, nset.values는 set객체에 있는 값을 나타냄

// nset ==> for...of와 filter를 이용하여 짝수값 출력
// Set 객체를 Array로 변환하는 작업
//! let array = Array.from(nset);
//! array = [...nset];
// console.log(array);
for (const number of [...nset].filter((n) => !(n % 2))) {
  console.log("8", number);
}
