// var : Global Scope - 키워드를 선언하고 정의되는 변수는 모두 var
// let, const : Local Scope
/*
  Scope : 블록 단위의 구분 개념, 메모리 효율성, 이름의 충돌 방지
  {
    Block(블록) : 블록에서 처리되고 종료되는 데이터는 블록단위로 선언해서 사용하자!!!
                  for() {}, if() {}, switch() {}, function() {}..
  }
*/
{
  var a = 10;
  const b = 20;
  console.log('a', a);  // 1
  console.log('b', b);  // 1

  {
    var a = 100;
    const b = 200;
    console.log('aa', a); // 2
    console.log('bb', b); // 2
  }

  console.log('aaa', a);  // 3
  console.log('bbb', b);  // 3

  for(let a = 1; a <6; a++) {
    console.log(a);
  }

}

