class Fruit {
  constructor(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }
  // 정적메소드 NEW없고 인스턴스메소드 NEW잇음
  // 정적(static) 메소드 : 인스턴스를 생성하지 않고도 호출할 수 있는 메소드!!
  // 클래스명.static메소드
  // 전체공용함수다 .찍고 바로쓸수있음 new안써도됌
  static makeFruit = () => {
    return new Fruit("peach", "pink", "🍑");
  };

  // 인스턴스 메소드
  // 클래스 내부에서만 함수선언을 이렇게한다
  display = () => {
    console.log(`${this.name}, ${this.color}, ${this.emoji}`);
  };
}
// 인스턴스 = new 키워드로 생성된 클래스
// 클래스 틀을만들고 그다음 찍어낸다

// static 메소드를 통한 객체 생성
const peach = Fruit.makeFruit();
peach.display();

// 인스턴스, 오브젝트
const apple = new Fruit("apple", "red", "🍎");
console.log(apple);
apple.display();
