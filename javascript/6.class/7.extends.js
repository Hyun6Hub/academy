/*  자식의 생성자가 호출이 되면 부모가 먼저 호출되도록 해야함 부모가 호출이 안되면 자식부터만듬
부모없는데 자식 못만듬 폴리곤에있는 생성자 호출해라 부모 생성자 호출할떈 수퍼
생성자가 붙었기때문에 부모한테 먼저가라 
*/

// 클래스간의 상속관계
// 빨강원, 노랑원, 노랑사각형, 초록사각형, 푸들, 말티즈, 회색토끼, 흰색토끼
// 원, 사각형 , dog, rabbit --- level 1
//   도형(Polygon)         동물      ---- level 2

// Polygon
// 속성 : color
// 메소드 : draw()
class Polygon {
  constructor(color, childName) {
    this.color = color;
    this.childName = childName;
  }
  draw = () => console.log(`${this.childName}을 그린다`);
}

class Circle extends Polygon {
  constructor(width, color) {
    super(color, "원");
    this.width = width;
    this.color = color;
  }
}
class Square extends Polygon {
  constructor(width, height, color) {
    super(color, "사각형"); //! Polygon(부모클래스)의 생성자 호출
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
}
const y = new Circle("노랑색");
const s = new Square(10, 20, "노랑색");
console.log(s.area);
console.log(s.color);
s.draw(); // 사각형을 그린다.
y.draw(); // 원을 그린다.
console.log(y.color);
