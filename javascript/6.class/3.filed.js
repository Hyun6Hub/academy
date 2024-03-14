// 클래스에 정의된 변수를 private(#), public 키워드로 접근 제어!! 내부접근 가능 외부에선 불가
class Fruit {
  #name;
  constructor(name, emoji) {
    this.#name = name;
    this.emoji = emoji;
  }
  display = () => console.log(`${this.#name}, ${this.emoji}`);
  // 함수내부니까 #써도 name출력됨 외부로 쓰면 출력안됨
}

const apple = new Fruit("apple", "🍎");
// apple.name = '사과';  // 접근이 불가함
apple.emoji = "🍏";
apple.display();

console.log("----------------");

class Student {
  #name;
  #age;
  #address;
  constructor(name, age, address) {
    this.#name = name;
    this.#age = age;
    this.#address = address;
  }
  study = () => console.log(`${this.#name}님은 공부를 열심히 합니다!!!`);
}
const hong = new Student("홍길동", "20", "서울");
hong.name = "홍홍";
hong.age = 30;
hong.study();
console.log("1", hong);
