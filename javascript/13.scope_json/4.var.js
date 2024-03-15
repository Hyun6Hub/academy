// var 키워드는 모두 전역으로 선언
// 이름 중복 정의 가능
var sname = 'hong';
var sname = 'lee';

let kname = 'hong';
// let kname = 'hong';

  {
    var sname = 'kim';
  }

console.log(sname);

function test() {
  var a = 100;
}
console.log(a);