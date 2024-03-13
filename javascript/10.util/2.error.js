// try~ catch ~ finally
// 에러생성 : new Error()

const array = [1, 2, 3]; // size:3
array[0] = 10;

// ??? 자바스크립트에서는 동적으로 배열 사이즈 증가!
// ? 자바에서는 ArrayIndexOutofBoundsException 이 출력됨 -> exception은 try 블록으로 해결됨
array[3] = 40;
console.log(array);

// doSomething();
let number = 123;
try {
  for (const n of number) console.log(n);
} catch (err) {
  console.log("에러 발생!!!");
}
