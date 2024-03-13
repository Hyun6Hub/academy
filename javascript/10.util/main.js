import { increment, getCount as currentValue, setCount } from "./counter.js";
import { duplicateCheck, replaceElement, searchElement } from "./commons.js";

console.log(increment());
console.log(increment());
console.log(increment());
console.log(`count --> ${currentValue()}`);
setCount(1000);
console.log(`count --> ${currentValue()}`);

const array = [1, 2, 1, 2, 3, 4, 5];
const [...result] = duplicateCheck(array);
console.log("result", result);

const rarray = replaceElement([1, 1, 2, 3, 4], 1, 10);
console.log("rarray", rarray);

let fruits = ["🍎", "🍊", "🍑", "🍋", "🍎"];
console.log(replaceElement(fruits, "🍎", "🥝"));

console.log(searchElement(fruits, "🥝"));
