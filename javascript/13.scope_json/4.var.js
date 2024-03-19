// var 키워드는 모두 전역으로 선언
// 이름 중복 정의 가능
var sname = "hong";
var sname = "lee"; //재할당

let kname = "hong";
// let kname = 'hong';

{
  var sname = "kim"; //최종적으론 kim출력
}

console.log(sname); //kim출력

function test() {
  var a = 100; //로컬 스코프안에서만 유효함
}
console.log(a);
