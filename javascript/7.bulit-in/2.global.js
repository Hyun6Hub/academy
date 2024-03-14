// 글로벌 객체 , 메소드
// parseInt(바꿀문자열), parseFlot(문자열)
console.log(parseInt("100"));
console.log(parseFloat("100.345"));
console.log(isNaN("a"));
console.log(eval("10"));

const uri = "https://더조은.com";
const encoded = encodeURI(uri);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);
