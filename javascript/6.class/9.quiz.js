// 카운터 만들기
// 0보다 큰 값으로 초기화를 한 후, 1씩 증가하는 카운터 만들기
// 클래스 형식 - Counter
class Counter {
  constructor(startValue) {
    if (startValue < 0 || isNaN(startValue)) {
      this.startValue = 1;
    } else {
      this.startValue = startValue;
    } // this가 counter를 가르킴 startValue는 this할당
  }
  get currentValue() {
    return this.startValue;
  }

  increment() {
    this.startValue++;
  }
}

const counter = new Counter("1");

// counter.increment();
console.log("1", counter.currentValue);

// counter.increment();
console.log("2", counter.currentValue);

// counter.increment(); //증가 안시키려면 주석처리
console.log("3", counter.currentValue);

//increment 메소드 카운터 값을 1씩 증가시킨다
