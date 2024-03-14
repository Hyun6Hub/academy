// 비동기 처리 : Promise --> 성공: then(), 실패: catch()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("javascript!!!");
  }, 500);
});

promise1
  .then((result) => {
    return result;
  })
  .then((result2) => {
    console.log("result2", result2);
  })
  .catch();

//-------------------------------------------------------
// runInDelay(callback, seconds) => Promise 형식으로 변환
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) throw new Error("seconds는 0보다 커야함");
    setTimeout(() => {
      resolve(seconds);
    }, seconds * 1000);
  });
}

runInDelay(1).then((result) => {
  console.log("runInDelay : ", `${result}초 경과!!`);
});

runInDelay(3).then((result) => {
  console.log("runInDelay : ", `${result}초 경과!!`);
});
