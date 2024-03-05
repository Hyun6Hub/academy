// 함수의 처리 결과 전송 키워드 - return
function print(lastName, firstName) {
  return `${firstName} ${lastName}`;
}

function printObj(lastName, firstName) {
  let obj = `${firstName} ${lastName}`;
  let nameObj = {
    name: obj,
  };
  return nameObj;
}

let name = print("길동", "홍");
console.log(name);
console.log(print("길순", "홍"));
console.log(printObj("길순", "홍"));
console.log(printObj("길순", "홍").name);
console.clear();

function objCall() {
  let obj1 = {
    name: "제임스",
    age: 30,
  };
  return obj1; // 객체타입이 리턴되면 주소값이 리턴됨!!!
}

let obj1Address = objCall();
console.log(obj1Address.name);
console.log(obj1Address.age);
console.log(objCall().name);
console.log(objCall().age);

console.clear();
// add
function add(a, b) {
  let result = 0;
  if (a > 0 && b > 0) {
    result = a + b;
  } else {
    result = "a와 b는 0보다 커야함";
  }
  return result;
}

function add2(a, b) {
  if (a < 0 || b < 0) {
    return "a와 b는 0보다 커야함";
  }
  return a + b;
}

console.log(add(100, 200));
console.log(add2(-100, 100));
console.log(add2(100, 100));
