//반복문
// while - 종료되는 조건을 알고 있는 경우
/* 
while (조건식 ){
    실행문
}
*/

//1~5까지 출력
let count = 1;
while (count <= 5) {
  if (count === 3) {
    break;
  } else {
  }
  console.log(count);
  count++;
}

console.log("------------");

const isactive = false;
while (isactive) {
  console.log("살아있니");
}
console.log("프로그램종료");
//반드시 처음에 한번 출력해야됌

console.log("------------");

let pcount = 1;
do {
  //   if (pcount === 4) break;
  if (pcount === 3) isactive = false;
  console.log("김밥");
  pcount++;
} while (isactive);
