// 일반 함수, 함수 표현식, 화살표 함수
// 일반 함수 : function 함수명(매개변수..) { }
// 함수 표현식 : let 함수명 = function (매개변수...) { }
// 화살표 함수 : let 함수명 = (매개변수) => { }
function add(a, b) {
  return a + b;
}

const add2 = function (a, b) {
  return a + b;
};

const add3 = (a, b) => {
  return a + b;
};
// let add3 = (a, b) => a + b;

console.log(`add(1, 2) : ${add(1, 2)}`);
console.log(`add2(1, 2) : ${add2(1, 2)}`);
console.log(`add3(1, 2) : ${add3(1, 2)}`);

function calculator(a, b) {
  // function add1(a, b) {
  //   console.log(a + b);
  // }

  // const add1 = function (a, b) { console.log(a + b);}
  const add1 = (a, b) => console.log(a + b);

  add1(a, b);
}

calculator(10, 20);
