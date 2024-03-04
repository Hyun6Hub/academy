// 구구단표 출력 : 2단 ~ 9단
// for (let i = 1; i < 10; i++) {
//   // 1
//   let row = ``;
//   for (let j = 2; j < 10; j++) {
//     //  2~ 9
//     row += `${j} * ${i} = ${i * j}\t`;
//   }
//   console.log(row);
// }

// 구구단 입력
const danStart = parseInt(window.prompt("시작하는 단을 입력해주세요"));
const danEnd = parseInt(window.prompt("종료하는 단을 입력해주세요"));

// table 형식으로 구구단 출력
document.write(`<table border=1>`);
document.write(`<tr><td colspan='8'>구구단 출력</td></tr>`);
document.write(`<tr>`);
for (let dan = danStart; dan <= danEnd; dan++) {
  if (dan === 7) {
    break;
  }
  document.write(`<th>${dan}단</th>`);
}
document.write(`</tr>`);

for (let i = 1; i < 10; i++) {
  document.write(`<tr>`);
  for (let j = danStart; j <= danEnd; j++) {
    if (j === 7) {
      break;
    }
    document.write(`<td>${j} * ${i} = ${i * j}</td>`);
  }
  document.write(`</tr>`);
}

document.write("</table>");
