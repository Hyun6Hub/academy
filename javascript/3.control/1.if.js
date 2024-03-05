// 제어문 - 조건문 : if, switch
// if(조건식) { 조건식이 참인경우 실행문; }
// if(조건식) { 조건식(true) } else { 조건식(false) }
// <---> 삼항 연산자 : (조건식) ? 조건식(true) : 조건식(false);
// if(조건1) { 조건1(true)} else if(조건2) { 조건2(true)}
// else if(조건3) { 조건3(true)}  .... else { 모든 조건이 false }

// 삼항 연산자 : pizza, hotdog
let menu = "pizza";
let display = "";
menu === "pizza" ? (display = "🍕") : (display = "🌭");
console.log(display);

console.log("------------------");

let fruit = "apple"; // default '해당 과일 없음'
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
} else if (fruit === "lemon") {
  console.log("🍋");
} else {
  console.log("해당 과일 없음!!");
}

console.log("------------------");

// 임의의 숫자를 입력받아... 짝수면 빨강사과, 홀수면 초록사과
// if ~ else, 삼항 연산자
let number = 11;
// if (number % 2 === 0) {
if (!(number % 2)) {
  console.log("🍎");
} else {
  console.log("🍏");
}
// 나머지 홀수1 참, 짝수0은 거짓
console.log("------------------");

let choiceMenu = "";
!(number % 2) ? (choiceMenu = "🍎") : (choiceMenu = "🍏");
console.log(choiceMenu);
