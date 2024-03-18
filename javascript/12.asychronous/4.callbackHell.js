// 순차적으로 호출되는 함수를 비동기식으로 처리하는 경우
function doStep1(init, callback) {
  const result = init + 1; //초기값에 +1 더함
  callback(result); //계산된 결과값을 인자로 콜백 함수 호출
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
  //dostep을 초기값 0으로 호출하고 결과처리
  console.log("result1 : ", result1); //result1은 콜백함수의 입력 파라미터
  doStep2(result1, (result2) => {
    console.log("result2 : ", result2);
    doStep3(result2, (result3) => {
      console.log("result3 : ", result3);
    });
  });
});
