// 구조 분해 할당
const fruit = ["🍎", "🍊", "🍑", "🥝", "🍋"];
const [a, b, ...flist] = fruit;
console.log("1", a);
console.log("2", b);
console.log("3", flist);

console.log("---------------------");

function createEmoji() {
  return { name: "apple", emoji: "🍎" };
}

const { name, emoji, price = 100 } = createEmoji();
console.log("4", createEmoji.name);
console.log("5", emoji);
console.log("6", price);

const emoji1 = createEmoji(); // <<로 { name: "apple", emoji: "🍎" } 들어간다
console.log("7", "name", emoji1.name);
console.log("8", "emoji", emoji1.emoji);
