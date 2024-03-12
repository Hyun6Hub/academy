// 퀴즈1: 주어진 배열 안의 사과 아이템을 딸기로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍎', '🍊', '🍑', '🍋', '🍎']
// output: [ '🍓', '🍊', '🍑', '🍋', '🍓']
// forEach method

/*let fruits = ['🍎', '🍊', '🍑', '🍋', '🍎'];
fruits.forEach((item, i) => {
  if(item === '🍎')   fruits.splice(i, 1, '🍓');
});
console.log(fruits);*/


// TODO : input Array return
function replace(array, origin, target) {
    array.forEach((item, i) => {
      if(item === origin)   array.splice(i, 1, target);
    });
    return array;
  }
  
  let fruits = ['🍎', '🍊', '🍑', '🍋', '🍎'];
  const result = replace(fruits, '🍎', '🍓');
  console.log('fruits result : ', result);
  console.log('shallow : ', fruits === result);  // true
  
  let numbers = [1, 2, 3, 4, 3, 3, 6, 7];
  const numbersResult = replace(numbers, 3, 30);
  console.log('numbersResult : ', numbersResult);
  
  // TODO : new Array return
  function replace2(array, origin, target) {
    const replaceArray = array.map((item) => {
      if(item === origin)     return target;
      else     return item;
    });
    return replaceArray;
  }
  const result2 = replace2(fruits, '🍎', '🍓');
  console.log('fruits result2 : ', result2);
  console.log('shallow : ', fruits === result2);  // false