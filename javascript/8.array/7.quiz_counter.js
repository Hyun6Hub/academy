/*
  Primitive DataType - 메모리주소에 값이 저장되는 형식
  : number, string, boolean
    let number = 10;
  Reference DataType - 메모리주소에 Heap에 생성된 객체의 주소가 저장되는 형식
  : Object literal({}), Class, Array([], new Array), Built-In Object
    let obj = { name: '홍길동'}
    let array = [ data1, data2, ...]

  ** Array(배열) - 동일한 데이터타입을 가진 데이터들이 저장, 인덱스를 통해 호출
  let array = [1, 2, 3, 4, 5..]
  let array2 = ['1', '2'..]
  let array3 = [{key:value},{key:value},{...}..]
  let obj1 = {key:value..}
  let obj2 = {key:value..}
  let array4 = [obj1, obj2..]
  let array5 = new Array(사이즈); // CRUD
  ! Array 생성은  [], new 사용하고, CRUD 작업시에는 메소드를 호출을 권장 
  ! 제어문의 for문 사용을 정확히 이해 
  ! 배열의 인덱스는 전체사이즈보다 하나 작다!
*/

// 배열 생성
let array1 = new Array(2); // 선언과 메모리주소 할당
console.log(array1);

let array2 = new Array(1, 2, 3); // 선언과 메모리주소 할당, item 저장
console.log(array2);

let array3 = [2, 4, 6]; // [] Array literal(배열 리터럴)
console.log(array3);

let array4 = Array.from(array3);
/* let array4_ = [
  {
    0: 2,
    1: 4,
    2: 6,
    length: 3,
  }// 배열과 특정 요소를 입력받아,
// 요소의 갯수를 반환하는 함수를 생성하고 실행해 보세요.
function searchItem(array, item) {
  let count = 0;
  array.forEach(element => {
    if(element === item) count++;
  });
  return count;
}

let fruits = ['🍎', '🍊', '🍑', '🍋', '🍎'];
let numbers = [1, 2, 3, 4, 3, 3, 6, 7];
const count = searchItem(fruits, '🍎');
const count2 = searchItem(numbers, 3);
console.log('count -->', count);
console.log('count2 -->', count2);

] */

// let array4 = array3;
console.log(array4);
console.log(array3 === array4);

let array5 = Array.from({
  0: 2,
  1: 4,
  2: 6,
  length: 3,
});
console.log(array5);

console.log(array1.length); // 2
console.log(array1.length - 1); // 0, 1

let array6 = [1, 2, "홍길동"];
console.log(array6);
