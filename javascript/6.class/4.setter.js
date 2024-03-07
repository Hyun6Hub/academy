// 클래스의 private data 접근이 가능한 함수 setter/getter
// TODO 나이를 입력받아 private 접근제어 부여 후 getter 함수 생성
class Employee {
  #lastName;
  #firstName;
  #age;
  constructor(lastName, firstName, age) {
    this.#lastName = lastName;
    this.#firstName = firstName;
    this.#age = age;
  }
  get age() {
    return this.#age;
  } //! getter 함수 호출 시 () 생략!!!!
  get lastName() {
    return `${this.#lastName}`;
  }
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  set age(value) {
    this.#age = value;
  }
}
const hong = new Employee("길동", "홍", 20);
console.log(hong.fullName);
hong.age = 30; // setter 호출
// hong.age(30);
console.log(hong.age);

//class안에 get있으면 리턴하는 형태 취함

//호출할땐 변수처럼 뒤에 () 안붙임 값으로만 리턴되니까

//접근제어가 프라이빗으로 설정한 데이터는 새터 게터 함수준다, 클래스만들때 중요 데이터 접근제어줌
