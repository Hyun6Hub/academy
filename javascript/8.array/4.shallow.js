// shallow copy -> 메모리 주소 복사
let pizza = { name:'🍕', price:10};
let ramen = { name:'🍜', price:20};

let store1 = [pizza, ramen];
console.log(store1);

pizza.price = 50;
console.log(pizza);
console.log(store1);

console.log(typeof store1[0]);
console.log(typeof pizza);
console.log(store1[0] === pizza);

