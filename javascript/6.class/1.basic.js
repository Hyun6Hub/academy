/*
  class 클래스명 {
    constructor(매개변수): 생성자함수 --> 변수 선언
    함수 선언
  }
*/
// let name ='홍길동';
/* this안붙이면 밖에있는게 우선 안붙이면 무조건 전역 글로벌*/
class Fruit {
  constructor(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}, ${this.color}, ${this.emoji}`);
  };
} // new로 클래스를 만들면 constructor적고 그밑에 this 자동실행
const apple = new Fruit("apple", "red", "🍎");
const orange = new Fruit("orange", "orange", "🍊");

apple.display();
orange.display();

console.log("1", apple);
console.log("2", orange);
//apple에 할당된 fruit 클래스를 출력함
