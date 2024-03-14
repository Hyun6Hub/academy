// 1. 문자열을 for문을 이용해서 한문자씩 출력
const str = "Hello World!!!";
console.log(str.length);
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
//[1 2 3 4][3] 4임
/* 
[1 2 3 4]
[3] 4임 이렇게 쓸수도있다
*/
// 하나씩 출력이니까 세로
console.log("---------------");

// 2. 사용자의 id 리스트 문자열을 배열로 생성
let idList = "user1,user2,user3,user4";
idList = idList.split(","); // split 쪼갠다 배열이됨 split의 리턴값이 배열
console.log(typeof idList); //타입은 오브젝트
for (let i = 0; i < idList.length; i++) {
  // idlist의 갯수만큼 돈다
  console.log(idList[i]);
}
console.log("---------------");
// 3. 1초에 한번씩 현재 시간(년,월,일)을 대한민국 시간에 맞추어 출력해주세요.
// 단, 10초후에 종료
const intervalId = setInterval(() => {
  console.log(new Date().toLocaleString("ko-KR"));
}, 1000);
[];
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
