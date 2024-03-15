// incerment 함수를 정의하고 호출 시 1씩 증가하도록 정의
let count = 1;

export function setCount(value) {
  count = value; //1에 value 할당
}

export function getCount() {
  return count; //카운트
}

export function increment() {
  return count++; //증가
}
