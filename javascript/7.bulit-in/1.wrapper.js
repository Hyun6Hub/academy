//wrapper class - primitive 데이터타입의 클래스로 정의
// number, string, boolean

const a = 10;
const b = new Number(10);
const c = 10;
const d = new Number(10);
console.log(a);
console.log(b);
console.log(a === b);
console.log(a === b.valueOf());
console.log(a === c);
console.log(b.valueOf() === d.valueOf());

const str = "hello~";
const str2 = new string("hello~");
console.log(typeof str);
console.log(typeof str2);
str2.