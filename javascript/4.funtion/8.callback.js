// 함수의 주입(Injection) --> 다른 함수의 매개변수 자리에 함수를 넣는 방식
add(1, 2, print1);
add(10, 20, print2);
/* print1 박으면 다른함수는 못옴 뒤에 ()안붙어서 주소만 가져옴 ()있으면 heap에감*/
function add(a, b, func) {
  //console.log(a + b);
  func(a + b);
}
function print1(a) {
  console.log(a);
}
function print2(a) {
  console.log(a);
}

//-------------------------------------------------
// job 이라는 함수에 매개변수로 순환(반복) 횟수를 입력
// 1부터 순환횟수까지 콘솔 출력
console.clear();
const job = (count, func) => {
  for (let i = 1; i <= count; i++) func(i);
};
const printAll = (value) => console.log(value);
const printEven = (value) => {
  if (!(value % 2)) console.log(value);
};
const printOdd = (value) => {
  if (value % 2) console.log(value);
};

job(5, printAll);
job(5, printEven);
job(5, printOdd);
console.clear();
job(3, function (num) {
  console.log(num);
});

printAll(3);

//--------------
setTimeout(() => console.log("오전 수업 종료!!"), 3000);

// 2초에 한번씩 'hi~'
let timerId = setInterval(() => console.log("hi~"), 2000);

// 5초후 clearInterval()
setTimeout(() => {
  clearInterval(timerId);
}, 5000);
