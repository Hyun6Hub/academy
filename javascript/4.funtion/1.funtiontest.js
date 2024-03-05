// 함수를 선언하고 호출해 봅시다.
// hello javascript! 를 출력하는 함수를 생성
function test(name, age = 1) {
  console.log(`${name}, ${age}살~ hello javascript!`);
}

test("송중기", 30);
test("홍길동");
test(30, "육개장 ");
