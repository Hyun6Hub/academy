class Fruit {
  constructor(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }

  // 정적(static) 메소드 : 인스턴스를 생성하지 않고도 호출할 수 있는 메소드!!
  // 클래스명.static메소드
  static makeFruit = () => {
    return new Fruit("peach", "pink", "🍑");
  };

  // 인스턴스 메소드
  display = () => {
    console.log(`${this.name}, ${this.color}, ${this.emoji}`);
  };
}

// static 메소드를 통한 객체 생성
const peach = Fruit.makeFruit();
peach.display();

// 인스턴스, 오브젝트
const apple = new Fruit("apple", "red", "🍎");
console.log(apple);
apple.display();
