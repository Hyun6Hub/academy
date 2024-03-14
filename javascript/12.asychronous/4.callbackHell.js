// 순차적으로 호출되는 함수를 비동기식으로 처리하는 경우
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 100;
  callback(result);
}

doStep1(0, (result1) => {
  console.log("result1 : ", result1);
  doStep2(result1, (result2) => {
    console.log("result2 : ", result2);
    doStep3(result2, (result3) => {
      console.log("result3 : ", result3);
    });
  });
});
