// 임의의 숫자를 입력받아... 짝수면 빨강사과, 홀수면 초록사과
// if ~ else, 삼항 연산자
let number = prompt("임의의 숫자를 입력해주세요");
// if (number % 2 === 0) {
if (!(number % 2)) {
  document.write("🍎 <br>");
  console.log("🍎");
} else {
  console.log("🍏");
}

let choiceMenu = "";
!(number % 2) ? (choiceMenu = "🍎") : (choiceMenu = "🍏");
console.log(choiceMenu);

let emoji = !(number % 2) ? "🍎" : "🍏";
console.log(emoji);

<<<<<<< HEAD
// 홀수면 true , 짝수면 false
=======
//
>>>>>>> 1655f7cc2db75ca26093b1b69df8894a25589291
