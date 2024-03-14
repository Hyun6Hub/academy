/*  자식의 생성자가 호출이 되면 부모가 먼저 호출되도록 해야함 부모가 호출이 안되면 자식부터만듬
부모없는데 자식 못만듬 폴리곤에있는 생성자 호출해라 부모 생성자 호출할땐 수퍼
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
  draw = () => console.log("1", `${this.childName}을 그린다`);
}
// circle가 polygon을 상속함 polygon값을 가져오는데 constructor때문에 circle값으로 덮어짐
// draw는 polygon에있고 circle엔 없기때문에 덮어지지않고 draw값 그대로 가져옴
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
console.log("2", s.area);
console.log("3", s.color);
s.draw(); // 사각형을 그린다.
y.draw(); // 원을 그린다.
console.log(y.color);

class Car {
  // 이름, 바퀴 갯수
  constructor(name = "기본 자동차", wheelNum = 4) {
    this.name = name;
    this.wheelNum = wheelNum;
  }

  get info() {
    return `${this.name}, ${this.wheelNum}`;
  }
  //get info 겟 키워드 인포라 부름
  getInfo() {
    return `${this.name}, ${this.wheelNum}`;
  }
}

const defaultCar = new Car("현시기 자동차 기본자동차");
console.log(defaultCar.info);
console.log(defaultCar.getInfo());

class SuperCar extends Car {
  constructor(name = "슈퍼 자동차", wheelNum = 100) {
    // 상속하는 Car의 constructor 실행
    super(name, wheelNum);
    this.option = "슈퍼자동차 추가 옵션";
  }

  get superInfo() {
    // 상속하는 Car의 기능(info 또는 getInfo)를 사용해서, 추가로 option도 포함해서 리턴
    // return this.getInfo() + `, ${this.option}`
    return this.info + `, ${this.option}`; //슈퍼자동차 추가옵션 가져옴
  }
}

const superCar = new SuperCar();
console.log("1", superCar.getInfo());
console.log("2", superCar.info);
console.log("3", superCar.superInfo);
