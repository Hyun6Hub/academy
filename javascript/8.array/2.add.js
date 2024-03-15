let fruits = ["🍎", "🍊"];
console.log("1", fruits);
console.log("2", fruits.length);
console.log("3", fruits[0]);
console.log("4", fruits[1]);
console.log("5", fruits[2]); // undefined

fruits[2] = "🍑"; //3번째 인덱스에 할당
delete fruits[1]; //2번째 인덱스 삭제
fruits[1] = "🍋"; //2번째 인덱스 할당

for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits[${i}] = ${fruits[i]}`);
}
