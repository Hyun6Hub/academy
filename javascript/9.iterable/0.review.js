// 배열객체와 특정요소를 입력받아
// 해당 조건의 내용을 처리해주세요
// 1. 배열의 요소 : Object literal
// 2. Object literal의 프로퍼티 이름이 '홍길동'인 사람의 이름을 'Hong'으로 치환
// replace 함수형태로 코드 구성
function replace(array, oldStr, newStr) {
  let resultArray = Array.from(array);
  resultArray = resultArray.map( element => {
    if(element.name === oldStr) {
      element.name = newStr;
      return element;
    }else return element;
  });
  return resultArray;
}

const array = [
  { name: '홍길동', age: 20 },
  { name: '송중기', age: 25 },
  { name: '로기완', age: 30 },
  { name: '홍길동', age: 20 },
  { name: '홍길순', age: 27 },
]
const result = replace(array, '홍길동', 'Hong');
console.log(result);
console.log(array === result);
// console.log('array',array[0].name); //!