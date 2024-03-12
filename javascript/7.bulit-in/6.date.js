// Date 클래스 - 날짜 메소드
console.log(Date.now());
console.log(new Date());

const now = new Date();
now.setFullYear(2024);
now.setMonth(2);  // 0:1월, 1:2월...
now.setDate(8);
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

// '2024년 3월 8일' => concat 메소드
const year = now.getFullYear().toString();
const month = now.getMonth()+1;
const date = now.getDate();
const display = year.concat('년 ', month, '월 ', date, '일');
console.log(display);

console.log(now.toLocaleString('ko-KR'));
console.log(now.toLocaleDateString('ko-KR'));

console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleDateString('en-US'));