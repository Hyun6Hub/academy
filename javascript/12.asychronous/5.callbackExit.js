// 순차적으로 호출되는 함수를 비동기식으로 처리하는 경우
// Promise를 사용하여 then, catch 호출
function doStep1(init) {
  const result = init + 1;
  return Promise.resolve(result);
}

function doStep2(init) {
  const result = init + 2;
  return Promise.resolve(result);
}

function doStep3(init) {
  const result = init + 100;
  return Promise.resolve(result);
}

doStep1(0)
  .then((result1) => {
    console.log("result1 : ", result1);
    return doStep2(result1);
  })
  .then((result2) => {
    console.log("result2 : ", result2);
    return doStep3(result2);
  })
  .then((result3) => {
    console.log("result3 : ", result3);
  });
