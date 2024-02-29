//데이터 할당, 재할당(let), 재할당 불가(const)
let a;
a = 10;
let b = 20;
a = 100;
b = 200;
const c = 100;
// c = 500;
const MAX_VAULE = 100;
console.log(a);
console.log(b);
console.log(c);
console.log(MAX_VAULE);

//apple
const apple = {
  name: "apple",
  color: "red",
  display: "👍",
};

//apple = {};
apple.name = "orange";
console.log = apple;
console.log = apple.name;
console.log = apple.color;
console.log = apple.display;
