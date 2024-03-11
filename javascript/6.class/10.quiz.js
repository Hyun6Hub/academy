class Fulltimeemployee {
  static #PAY_RATE = 10000; //상수들은 static
  constructor(name, department, hours) {}
  calculatorPay = () => {};
}

const hong = new Fulltimeemployee("홍길동", "개발팀", "30");
const smith = new Parttimeemployee("스미스", "영업팀", "10");
