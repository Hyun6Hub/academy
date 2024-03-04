// 제어문 - 조건절 :if~else if~... else, switch ~ case
// switch(숫자, 문자) {
//    case 숫자, 문자 :    처리할 실행문 ~
//          break;
//    case 숫자, 문자 :    처리할 실행문 ~
//          break;
//    default :  기본적으로 실행문 문장
// }

// 0: 월요일, 1: 화요일 ..  6: 일요일

/* if안에 선언하면 못찾음 그래서 if문 밖에 변수선언 */

let day = 3;
let dayName = "";  //
if (day === 0) {
  dayName = "월요일";
} else if (day === 1) {
  dayName = "화요일";
} else if (day === 2) {
  dayName = "수요일";
} else if (day === 3) {
  dayName = "목요일";
} else if (day === 4) {
  dayName = "금요일";
} else if (day === 5) {
  dayName = "토요일";
} else if (day === 6) {
  dayName = "일요일";
} else {
  dayName = "요일에 해당하지 않음!!";
}

switch (day) {
  case 0:
    dayName = "월요일";
    break;
  case 1:
    dayName = "화요일";
    break;
  case 2:
    dayName = "수요일";
    break;
  case 3:
    dayName = "목요일";
    break;
  case 4:
    dayName = "금요일";
    break;
  case 5:
    dayName = "토요일";
    break;
  case 6:
    dayName = "일요일";
    break;
  default:
    dayName = "해당요일이 없음!!!";
}

console.log(dayName);
