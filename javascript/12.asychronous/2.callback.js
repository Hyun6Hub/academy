// runInDelay(callback, seconds)
function runInDelay(callback, seconds) {
  if (seconds < 0) throw new Error("seconds는 0보다 커야함");//지정된 시간이 0보다 작으면 에러
  setTimeout(callback, seconds);// settimeout 지정된 지연시간 지난후 콜백함수 실행
}


try { //try catch문 시작하여 예외처리 시도
  runInDelay(() => {  //첫번째 함수 호출 첫번째 인자로 콜백함수, 두번째 인자 -1000
    console.log("타이머 1초 경과!!");
  }, -1000); //지정된 시간 지나면 콜백함수
} catch (error) { 
  console.log("seconds는 0보다 커야함!!!");//에러 발생시 실행
}

runInDelay(() => {
  console.log("타이머 3초 경과!!");
}, 3000);
