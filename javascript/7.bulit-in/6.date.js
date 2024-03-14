// Date 클래스 - 날짜 메소드
console.log("1", Date.now());
console.log(new Date());

const now = new Date();
now.setFullYear(2024); //년도 설정
now.setMonth(2); // 0:1월, 1:2월...
now.setDate(8); //8일로 설정
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

console.log("------------------------------");

// '2024년 3월 8일' => concat 메소드
const year = now.getFullYear().toString();
const month = now.getMonth() + 1; //제로 베이스여서 0으로 시작하기 때문
const date = now.getDate();
const display = year.concat("년 ", month, "월 ", date, "일");
console.log("1", display);

console.log(now.toLocaleString("ko-KR"));
console.log(now.toLocaleDateString("ko-KR"));

console.log(now.toLocaleString("en-US"));
console.log(now.toLocaleDateString("en-US"));
