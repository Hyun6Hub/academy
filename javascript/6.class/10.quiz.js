// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자.
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 급여를 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원
class Employee {
  constructor(name, department, hours, payRate) {
    this.name = name;
    this.department = department;
    this.hours = hours;
    this.payRate = payRate;
  }
  calculatorPay = () => {
    return this.hours * this.payRate;
  };
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000; // 상수들은 static
  constructor(name, department, hours) {
    super(name, department, hours, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000; // 상수들은 static
  constructor(name, department, hours) {
    super(name, department, hours, PartTimeEmployee.#PAY_RATE);
  }
}

const hong = new FullTimeEmployee("홍길동", "개발팀", "30");
const smith = new PartTimeEmployee("스미스", "영업팀", "10");
console.log(`${hong.name} pay : ${hong.calculatorPay()}`);
console.log(`${smith.name} pay : ${smith.calculatorPay()}`);
