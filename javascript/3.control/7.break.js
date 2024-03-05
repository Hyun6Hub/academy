//반복문 빠져나오기 : break, 건너뛰기: continue

for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}
console.log("프로그램종료");
