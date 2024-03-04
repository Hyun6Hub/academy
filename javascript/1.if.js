// if 제어문 - 조건문: if, switch
// if (조건식) { 조건문이 참인경우 실행문;}
// if(조건식) {조건문(true)} else{조건문(false)} <---> 삼항 연산자 : (조건식) ? 조건식(true): 조건식(false)
// if(조건식1) {조건1(true)} else if(조건2) {조건2(true)}
// else if (조건3) {조건3(true)} ... else{ 모든조건이 false}

//삼항 연산자 : piazz, hotdog
let menu = "piazz";
let display = "";
menu === "piazz" ? display("피자") : console.log("핫도그");
console.log(display);
/* ???????display 콘솔에 */
console.log("---------------");

let fruit = "apple"; //default "해당과일없음"
if (fruit === "apple") {
  console.log("😎");
} else if (fruit === "lemon") {
  console.log("😣");
} else {
  console.log("해당과일없음");
}
console.log("---------------");

//임의의 숫자를 받아 짝수면 빨강사과, 홀수면 초록사과
let number = 10;
// if(number %2===0){
if (!(number % 2)) {
  console.log("red");
} else {
  console.log("green");
}

let choicemenu = "";
number % 2 === 0 ? console.log(red) : console.log(green); //!(number %2)
console.log(choicemenu);
