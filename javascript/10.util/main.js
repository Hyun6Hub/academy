import { increment, getCount as currentValue, setCount } from "./counter.js";
import { duplicateCheck, replaceElement, searchElement } from "./commons.js";

console.log("1", increment());
console.log("2", increment());
console.log("3", increment());
// 세면서 증가한다 counter가져옴

console.log("4", `count --> ${currentValue()}`); //as가 있으므로 get -> curremt 바뀜 get은 이제 못씀
setCount(1000);
console.log("5", `count --> ${currentValue()}`);

console.log("--------------------------------------------");

const array = [1, 2, 1, 2, 3, 4, 5];
const [...result] = duplicateCheck(array);
console.log("6", "result", result);

const rarray = replaceElement([1, 1, 2, 3, 4], 1, 10); // 1과 일치하는거 10으로바꿈
console.log("7", "rarray", rarray);

console.log("--------------------------------------------");

let fruits = ["🍎", "🍊", "🍑", "🍋", "🍎"];
console.log("8", replaceElement(fruits, "🍎", "🥝")); // 사과를 키위로 대체함

console.log("9", searchElement(fruits, "🥝")); //사과가 2개인데 사과를 키위로 대체함
