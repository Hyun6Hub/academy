// shallow copy -> 메모리 주소 복사

//다른 서버에는 메모리 객체 없다 그럼 데이터 못넘어감 객체들 넘길때 메모리 힙 덩어리 채로보냄 쪼개서 보내지 않음 직렬화가 덩어리로 보냄
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

