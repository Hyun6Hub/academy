// object - function, object literal, array, class
// object literal(객체리터럴) : { key:value, key:value ...}
const obj = {
  name: "홍길동",
  age: 20,
};
console.log("1", typeof obj); // obj --> 참조 메모리 ---> Heap(객체주소)

// object 값 출력 : object.property(key)
console.log("2", obj); // 이름 나이 출력됨
console.log("3", obj.name);
console.log("4", obj.age);

console.log("------------------");

// object value add : object.property(key) = value;
obj.job = "developer"; //홍길동 호랑이 둘다 적용됨
console.log("5", obj);

obj.name = "호랑이";
console.log("6", obj);

delete obj.job; //job를 뺀다
console.log("7", obj);

// ! obj에 새로운 객체를 할당할 수 없는 이유는 const로 정의되었기 때문!!
// obj = { name: '스미스'};
// console.log(obj);
