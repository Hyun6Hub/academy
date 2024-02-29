// call by value

let a = 10;
let b = a;
let c = "abc";
c = b; // c = 10
console.log(a);
console.log(b);
console.log(c);

// call by refernces
//실제 저장되는 위치는 다름

let obj1 = [1, 2, 3];
let obj2 = obj1;
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);

obj2[2] = 30;
console.log(obj1);
console.log(obj2);
//객체 참조변수를 리턴한다는것은 참조주소를 리턴한다
