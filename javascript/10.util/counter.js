// incerment 함수를 정의하고 호출 시 1씩 증가하도록 정의
let count = 1;

export function setCount(value) {
  count = value;
}

export function getCount() {
  return count;
}

export function increment() {
  return count++;
}
