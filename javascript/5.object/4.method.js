// 객체 리터럴 - 속성, 메소드(행위, 동작)
const apple = {
  name: "apple",
  display: function () {
    //display는 객체내 함수로 정의된것 이기때문에 메서드라 불림
    console.log("🍎"); //display는 key이고 value는 일반함수
  },
  display2: () => console.log("🍏"),
}; //display는 key, value는 화살표함수
apple.display();
apple.display2();
