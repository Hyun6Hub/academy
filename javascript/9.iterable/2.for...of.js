// iterable object(String, Array, Map, Set...) 들이 순회를 진행하는 구조 함수
// for(value of iterable) { 실행로직; }

// 주어진 배열 안의 사과 아이템을 딸기로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
const replace = (array, origin, target) => {
  let i = 0;
  for(let fruit of array) {
    if(fruit === origin) {
      array.splice(i, 1, target);
    }
    i++;
  }
  return array;
}

let fruits = ['🍎', '🍊', '🍑', '🍋', '🍎'];
const result = replace(fruits, '🍎', '🍓');
console.log(result);