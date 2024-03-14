// runInDelay(callback, seconds)
function runInDelay(callback, seconds) {
  if (seconds < 0) throw new Error("seconds는 0보다 커야함");
  setTimeout(callback, seconds);
}

try {
  runInDelay(() => {
    console.log("타이머 1초 경과!!");
  }, -1000);
} catch (error) {
  console.log("seconds는 0보다 커야함!!!");
}

runInDelay(() => {
  console.log("타이머 3초 경과!!");
}, 3000);
