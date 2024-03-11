// 저장소 : 변수, 객체, 클래스, 배열
// 변수 - 하나의 데이터 저장
// 객체(객체리터럴 {}) - 여러타입의 데이터를 저장
// 클래스(객체리터럴 생성 틀) - 여러타입을 가지는 객체의 공통점을 포함한 틀
// new연산자를 이용하여 인스턴스(객체)를 생성
// 배열 - 동일한 타입을 가지는 데이터를 저장
// 기능구현 :함수

//강아지: 미미,  토토
//속성 : name, color, eat, sleep
//메소드: eat, sleep

const mimi = {
  name: "미미",
  color: "white",
  age: 2,
  eat: function () {
    console.log("먹는다");
  },
  sleep: function () {
    console.log("잔다");
  },
};

const toto = {
  name: "토토",
  color: "white",
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

//mimi is a Dog
//name has a Dog
class Dog {
  constructor(name, color, age) {
    this.name;
    this.color;
    this.age;
  }
  get info() {
    return `${this.name},${this.color},${this.age}`;
  }
  eat() {
    console.log(`${this.name}{먹는다}`);
  }
  sleep() {
    console.log("잔다");
  }
}
// dog, cat의 일반화(추상화) ---> Animal
// dog is a Animal(o) : dog(자식), animal(부모)
// cat is a Animal(o) : cat(자식), animal(부모)


class Animal {
    constructor(name, color, age) {
      this.name;
      this.color;
      this.age;
    }

class Dog extends Animals {
    constructor(name, color, age) {
        // super(name, color, age); //자식이 부모출력할땐 수퍼
      this.name;
      this.color;
      this.age;
    }
class cat extends Animals {
    constructor(name, color, age) {
      this.name;
      this.color;
      this.age;
    }
  

const mimi2 = new Dog("mimi", "white", "2");
const toto2 = new Dog("toto", "gray", "5");
const jude = new Dog("jude", "brown", "1");
mimi2.eat();
toto2.eat();
console.log(mimi2.info());