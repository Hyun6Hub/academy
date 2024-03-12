let fruits = ['🍎', '🍊'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined

fruits[2] = '🍑';
delete fruits[1];
fruits[1] = '🍋';

for(let i =0; i < fruits.length; i++) {
  console.log(`fruits[${i}] = ${fruits[i]}`);
}