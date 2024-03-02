//한줄 주석
/* 변수명 규칙
라틴문자 0-9, a-z, A-Z
대소문자 구분 camelCase(naDaa), snakeCase(ㅇㅇ_ㅇㅇ)
한글, 키워드, 특문(_, $가능), 숫자 
*/
let myAge = 10;
let myName = "홍";
console.log(myAge);
console.log(myName);
//+(접합연산자), ``(템플릿리터럴)
let output = "내 이름은 " + myName + "이고 나이는 " + myAge + "살입니다.";
console.log(output);
output = `
내 이름은${myName} 이고 나이는 ${myAge}살 입니다.
`;
console.log(output);
myAge = 11;

const audioName = "삼성"; //상수 올대문자
const audiocolor = "red";

const AUDIO_NAME = "삼성"; //상수 올대문자, snakeCase
const AUDIO_COLOR = "red";
