// shallow copy -> 메모리 주소 복사

//다른 서버에는 메모리 객체 없다 그럼 데이터 못넘어감 객체들 넘길때 메모리 힙 덩어리 채로보냄 쪼개서 보내지 않음 직렬화가 덩어리로 보냄
let pizza = { name: "🍕", price: 10 };
let ramen = { name: "🍜", price: 20 };

let store1 = [pizza, ramen];
console.log("1", store1);

pizza.price = 50;
console.log("2", pizza);
console.log("3", store1);

console.log("4", typeof store1[0]);
console.log("5", typeof pizza);
console.log("6", store1[0] === pizza);
