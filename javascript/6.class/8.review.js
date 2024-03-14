// 저장소 : 변수, 객체, 클래스 ,배열
// 변수 - 하나의 데이터 저장
// 객체(객체리터럴 {}) - 여러타입의 데이터를 저장
// 클래스(객체리터럴 생성 틀) - 여러타입을 가지는 객체의 공통점을 포함한 틀
// new 연산자를 이용하여 인스턴스(객체)를 생성
// 배열 - 동일한 타입을 가지는 데이터를 저장
// 기능구현 : 함수

// 강아지: 미미, 토토
// 속성 : name, color, age
// 메소드 : eat, sleep
const mimi = {
  name: "미미",
  color: "white",
  age: 2,
  eat: function () {
    console.log("먹는다");
  },
  sleep() {
    console.log("잔다");
  }, //이렇게 적어도 sleep라는 key에 value라는 funtion가 들어간다 객체모양에선 이럼
};
const toto = {
  name: "토토",
  color: "gray",
  age: 5,
  eat: function () {
    console.log("먹는다");
  },
  sleep: function () {
    console.log("잔다");
  },
};
console.log(mimi.name);
console.log(toto.name);

// Dog, Cat의 일반화(추상화) ---> Animal
// Dog is a Animal (o) : Dog(자식), Animal(부모)
// Cat is a Animal (o) : Cat(자식), Animal(부모)
class Animal {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  get info() {
    return `${this.name}, ${this.color}, ${this.age}`;
  }
  eat() {
    console.log(`${this.name} 먹는다`);
  }
  sleep() {}
}

class Dog extends Animal {
  constructor(name, color, age) {
    super(name, color, age);
  } // super가 엄마 constritor 불러옴
  play() {
    console.log(`${this.name} 논다`);
  }
  sleep() {
    console.log(`${this.name}가 하루종일 잔다`);
  } // 메소드 오버라이딩
}

class Cat extends Animal {
  constructor(name, color, age) {
    super(name, color, age);
  }
}

const dog1 = new Dog("콩이", "흰색", 3);
console.log(dog1.name);
dog1.eat();
dog1.sleep();
dog1.play();
