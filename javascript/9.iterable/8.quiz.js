// 중복된 배열을 입력받아서, 중복을 제거한 후 출력
function fruitFiltering(iterable) {
  //중복된 배열받음
  // const result = new Set(iterable);
  return new Set(iterable); //중복 제거한 set객체 받음
} //리턴 값을 set으로 중복 제거한상태로 만들어서 const로 출력후 log찍어도 중복 제거가됨

const fruit = ["🍎", "🍊", "🍑", "🥝", "🍋", "🍎", "🍊"];
const result = fruitFiltering(fruit);
console.log("1", result);

const nums = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
console.log("2", Array.from(fruitFiltering(nums))); //다시 배열로 바꾼다

//set객체
