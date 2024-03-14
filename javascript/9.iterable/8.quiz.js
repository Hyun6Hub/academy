// 중복된 배열을 입력받아서, 중복을 제거한 후 출력
function fruitFiltering(iterable) {
  // const result = new Set(iterable);
  return new Set(iterable);
}

const fruit = ['🍎', '🍊', '🍑', '🥝', '🍋','🍎', '🍊'];
const result = fruitFiltering(fruit);
console.log(result);

const nums = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
console.log(fruitFiltering(nums));
