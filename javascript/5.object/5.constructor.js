// 생성자 함수
// apple 객체 - 속성:name, color, 메소드:display
// const apple = {
//   name: "apple",
//   color: "red",
//   display: function () {
//     console.log('🍎');
//   }
// }

// // orange 객체 - 속성:name, color, 메소드:display
// const orange = {
//   name: "orange",
//   color: "orange",
//   display: function () {
//     console.log('🍊');
//   }
// }
// apple.display();
// orange.display();

// 생성자 함수 : 객체의 공통된 속성과 메소드들을 모아서 하나의 '틀' 생성
function Fruit(name, color, emoji) {
  this.name = name;
  this.color = color;
  this.emoji = emoji;

  this.display = () => {
    console.log(this.emoji);
  };
}
/* 
const a = {
  key : 'value'
}

a.name = 'asd'
a.display = () => {}
a.display()

나중에 위처럼도 쓸수있다
new fruit써도 되는데 apple에 할당함
this가 fruit를 할당함
display도 thsi에 할당한거
*/

const apple = new Fruit("apple", "red", "🍎");
const orange = new Fruit("orange", "orange", "🍊");
const peach = new Fruit("peach", "pink", "🍑");

apple.display();
orange.display();
peach.display();
