// 순차적으로 호출되는 함수를 비동기식으로 처리하는 경우
// Promise를 사용하여 then, catch 호출
function doStep1(init) {
  //init을 매개변수로 받음 init 매개변수는 초기값을 의미함
  const result = init + 1; //매개변수에 1을 더한값을 result에 할당
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

doStep1(0) //함수를 초기값 0으로 호출함
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
