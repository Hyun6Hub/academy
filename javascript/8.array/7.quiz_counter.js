// 배열과 특정 요소를 입력받아,
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
  