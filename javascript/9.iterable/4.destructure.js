// 구조 분해 할당
const fruit = ['🍎', '🍊', '🍑', '🥝', '🍋'];
const [a, b, ...flist] = fruit;
console.log(a);
console.log(b);
console.log(flist);

function createEmoji() {
  return { name: 'apple', emoji: '🍎'}
}
const {name, emoji, price=100} = createEmoji();
console.log(name);
console.log(emoji);
console.log(price);

const emoji1 = createEmoji();
console.log('name',emoji1.name);
console.log('emoji',emoji1.emoji);