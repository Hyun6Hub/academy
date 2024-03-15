// 호이스팅(Hoisting) : 실행하기 전 메모리에 객체를 선언하고 할당하는 작업
// function 함수명() { ~ }

print();
// print2(); // let, const 키워드로 정의되는 화살표함수는 호이스팅이 안됨

function print() {
  console.log('호이스팅 가능!!');
}

const print2 = () => {
  console.log('호이스팅 가능???');
}
print2();