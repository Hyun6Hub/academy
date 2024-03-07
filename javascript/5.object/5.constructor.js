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

/* this붙으면 메모리에 저장된거임 변수선언해서 넣어줘야함 이 스코프안에서만 씀 */
// 생성자 함수 : 객체의 공통된 속성과 메소드들을 모아서 하나의 '틀' 생성
function Fruit(name, color, emoji) {
  this.name = name;
  this.color = color;
  this.emoji = emoji;

  this.display = () => {
    console.log(this.emoji);
  };
}
const apple = new Fruit("apple", "red", "🍎");
const orange = new Fruit("orange", "orange", "🍊");
const peach = new Fruit("peach", "pink", "🍑");
apple.display();
orange.display();
peach.display();
/* new는 생성자 함수를 쓴거임 */
/* 하나 골라서 출력 */
