// wrapper class - primitive 데이터타입의 클래스로 정의
// number, string, boolean..
const a = 10;
const b = new Number(10);
const c = 10;
const d = new Number(10);
console.log(a === b.valueOf()); // false
console.log(a === c);
console.log(b.valueOf() === d.valueOf());

const str = "hello~";
const str2 = new String("hello~");
const longStr = `hello~hello~hello~hello~hello~

hello~hello~hello~hello~

hello~hello~hello~hello~
`;
console.log(typeof str);
console.log(typeof str2);
console.log(typeof longStr);

const isActive = true;
const isActive2 = new Boolean(true);
console.log(typeof isActive);
console.log(isActive);
console.log(isActive2);
console.log(isActive === isActive2.valueOf());