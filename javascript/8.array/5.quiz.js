// 퀴즈1: 주어진 배열 안의 사과 아이템을 딸기로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍎', '🍊', '🍑', '🍋', '🍎']
// output: [ '🍓', '🍊', '🍑', '🍋', '🍓']
// basic for --> index
/*
let fruits = ['🍎', '🍊', '🍑', '🍋', '🍎'];
for(let i = 0; i < fruits.length; i++) {
  if(fruits[i] === '🍎'){
    fruits[i] = '🍓';
  }
}
console.log(fruits);
*/
//코드로 바로 해석하려하지말고 말로 행위로 해석하기
// TODO : input Array return
function replace(array, origin, target) {
  //array에서 교체하고자하는 origin과 교체할 target
  for (let i = 0; i < array.length; i++) {
    if (array[i] === origin) {
      //배열에서 origin을 찾는다
      array[i] = target; // origin으로 할당받은거에 target를 바꿔줌
    }
  }
  return array;
} //함수 작성완료

let fruits = ["🍎", "🍊", "🍑", "🍋", "🍎"]; // 0x1234567
const result = replace(fruits, "🍎", "🍓"); //함수할당한 replace가 result로 들어옴, 0x1234567
console.log("1", "fruits result : ", result);
console.log("2", "shallow : ", fruits === result); // true

let numbers = [1, 2, 3, 4, 3, 3, 6, 7];
const numbersResult = replace(numbers, 3, 30);
console.log("3", "numbersResult : ", numbersResult);
//결론 : 원본을 바꾼다

fruits = ["🍎", "🍊", "🍑", "🍋", "🍎"];
// TODO : new Array return
function replace2(array, origin, target) {
  let replaceArray = Array.from(array); //복사해옴
  for (let i = 0; i < replaceArray.length; i++) {
    if (replaceArray[i] === origin) {
      replaceArray[i] = target;
    }
  }
  return replaceArray;
  const result2 = replace2(fruits, "🍎", "🍓");
  console.log("4", "fruits result1 : ", fruits);
  console.log("5", "fruits result2 : ", result2);
  console.log("6", "shallow : ", fruits === result2); // false
} //결론 : 복사한것을 바꾼다
