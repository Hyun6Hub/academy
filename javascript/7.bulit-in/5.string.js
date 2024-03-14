// String 클래스의 메소드
const textObj = new String("Hello JavaScript!!");
let text = "Hello JavaScript!!";
console.log(textObj);
console.log(text);
console.log(typeof textObj);
console.log(typeof text);
console.log(text);
console.log(text.charAt(0));
console.log(text[1]);
console.log(text[2]);
console.log(textObj.charAt(0));
console.log(textObj[1]);
console.log(textObj[2]);
console.clear();

console.log(text.concat("  ", textObj));
text = text.concat("HHH");
console.log(text);
console.log(text.indexOf("H"));
console.log(text.indexOf("h")); // 대소문자 구분

console.log(text.lastIndexOf("S"));
console.log(text.lastIndexOf("s")); // 대소문자 구분

console.log(text.includes("He"));
console.log(text.includes("he")); // 대소문자 구분

console.log(text.toUpperCase()); // 대문자로 치환
console.log(text.toLowerCase()); // 소문자로 치환

console.log(text.substring(0, 2)); // 문자열 추출
console.log(text.slice(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

text = "                Hello JavaScript!!                  ";
console.log(text.trim()); // 공백 삭제

const fruit = "🍋 🍑 🍏, 🍊, 🍎";
console.log(fruit.split(","));

console.log(fruit.split(",", 2));
//제한 2개 2개로 나눈다
