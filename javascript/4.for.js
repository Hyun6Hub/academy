// //

// // 단일 for문 <---> 1차원 배열
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// } // 중첩for문 <---> (let i = 0; i < 5; i++)

// console.log("------------------------");
// //중첩 for문 <---> 2차원 배열

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   for (let i = 0; j < 5; j++) {
//     console.log(i, j);
//   }
// }

//i=0 --> j: 0~4 까지 반복
// i = 1 -->

console.clear();
console.log("------------------------");
// \t:탭키 만큼 띄우기
// \n: 라인 개행
// \\
// 구구단 2단
for (let i = 2; i < 3; i++) {
  let output = ""; //1~9출력코드 중첩
  for (let j = 1; j < 10; j++) console.log(`구구단 : ${i}단`);
  for (let j = 1; j < 10; j++) console.log(`${i} * ${j} = ${i * j}`);
  output += `${i}*${j}=${i * j}\t`;
  console.log(output);
}

// i =2 -->
//
