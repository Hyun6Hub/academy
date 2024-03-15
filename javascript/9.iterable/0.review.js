// 배열객체와 특정요소를 입력받아
// 해당 조건의 내용을 처리해주세요
// 1. 배열의 요소 : Object literal
// 2. Object literal의 프로퍼티 이름이 '홍길동'인 사람의 이름을 'Hong'으로 치환
// replace 함수형태로 코드 구성
function replace(array, oldStr, newStr) {
  let resultArray = Array.from(array);
  resultArray = resultArray.map((element) => {
    //map인자 하나하나씩 돌면서 element에 할당한다, map 내장함수 사용법 마우스대면 설명

    if (element.name === oldStr) {
      element.name = newStr;
      return element; //element값 리턴하고
    } else return element;
  }); // 콜백함수 여기까지
  return resultArray; //element에서 리턴한값이 resultArray로 다시 할당한다
}

const array = [
  { name: "홍길동", age: 20 },
  { name: "송중기", age: 25 },
  { name: "로기완", age: 30 },
  { name: "홍길동", age: 20 },
  { name: "홍길순", age: 27 },
];
const result = replace(array, "홍길동", "Hong"); //홍길동을 hong로 바꾸겠다
console.log(result);
console.log(array === result); //원본하고 replace써서 복사한걸 확인하려고 씀 원본은 홍길동이지만 hong로 바뀜
// console.log('array',array[0].name); //!
