/* 
#로 막아놓은거 접근 자유롭게하려고 새터 게터 변수값을 넣고 뺄때
게터 생성은 함수처럼 호출은 변수처럼
get이면 클래스값 주기만하면됨
게터안 {} #네임 넣음

get
get
set
set 이렇게 만듬

const new
*/

// 학생 클래스
// 속성 : #이름, #나이, #주소, 별칭
// 이름, 나이, 주소 필드는 setter/getter 함수를 생성
// info 라는 getter 함수로 학생 정보 출력
class Student {
  #name;
  #age;
  #address;
  constructor(name, age, address, nickName) {
    this.#name = name;
    this.#age = age;
    this.#address = address;
    this.nickName = nickName;
  }
  // # privit쓰면 getter로 가져와야함
  get name() {
    return this.#name;
  } // getter 생성은 함수처럼 호출은 변수처럼!!
  get age() {
    return this.#age;
  }
  get address() {
    return this.#address;
  }
  get info() {
    return `${this.#name}, `;
  }

  set name(name) {
    this.#name = name;
  }
  set age(age) {
    this.#age = age;
  }
  set address(address) {
    this.#address = address;
  }
}
const hong = new Student("홍길동", 20, "서울", "홍홍");
console.log(hong.info);

console.log("------------------------");

class Money {
  #money;

  constructor(money) {
    this.#money = money;
  }

  get moneyWithCurrency() {
    return this.#money + "원";
  }

  display() {
    console.log(this.moneyWithCurrency);
  }

  add() {
    this.#money += 10;
  }
} // display는 콘솔찍으려고씀

const myMoney = new Money(12345);
console.log(myMoney.moneyWithCurrency);
// myMoney.display(); 클래스 함수를 통해서 PRIVATE변수 접근을 하게 한다 콘솔로그 괄호안에 적어야함

myMoney.add(); //함수통해서 내부값을 컨트롤함
myMoney.display();
