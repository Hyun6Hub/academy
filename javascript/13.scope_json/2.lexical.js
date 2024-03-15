// Execution Context(실행컨텍스트) : Scope 체계를 저장하고 관리하는 역할
// Call Stack(콜스택) : 호출되는 함수를 순서대로 관리
{
  let a = 10;
  console.log('a', a);
  {
    let b = 20;
    console.log('b', b);
    {
      let c = 30
      console.log('c', c);
    }// level3
  }// level2
} // level1