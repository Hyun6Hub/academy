// MDN 사이트를 참조하여 메소드를 사용하는법 숙지!!!
let fruits = [];
fruits[0] = "🍎"; //인덱스 0에 사과
fruits[5] = "🍊"; //인덱스 5에 오렌지

// 해당 배열의 key 출력
console.log("1", Object.keys(fruits)); //배열 키 출력
console.log("2", fruits); //배열 출력  0,5번출력 나머지는 empty items
console.log("3", fruits.length); // 배열의 길이6

// 배열의 item 추가
fruits.push("🍋", "🍑"); // 맨 마지막에 item을 추가할때
fruits.unshift("🍏"); // 맨 처음에 item을 추가할때
fruits.splice(2, 0, "🍕"); // 특정 인덱스에 item을 추가할때
console.log("4", fruits.length); // 10

// 배열의 item 제거
fruits.pop(); // 맨 마지막 item 제거(배열 업데이트)
fruits.shift(); // 맨 처음 item 제거
fruits.splice(1, 1); // 특정 인덱스의 item 제거
fruits.splice(0, 2); // 특정 인덱스의 item 제거 0,1 인덱스 제거
fruits.splice(3); // 특정 인덱스의 item 제거 0,1 인덱스 제거
console.log("5", fruits.length);

fruits.splice(0);
fruits.push("🍏", "🍊", "🍑", "🍋", "🍎");

console.log("-------------------------");

// 배열의 item 추출 --> 추출한 item들을 새로운 배열로 생성하여 반환
let sfruits = fruits.slice(3); // 인덱스 3번지부터 끝까지 추출
sfruits = fruits.slice(1, 3); // 인덱스 1, 2번지까지 추출 재할당했으니까 재할당 받은거로 출력됨
console.log("6", sfruits); //sfruits 변수값 출력

// 배열 합치기
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("7", arr1.concat(arr2));
console.log("8", arr2.concat(arr1));
console.log("9", arr1.concat([10, 20], arr2, "100", "200", { num: 1000 }));

console.log("-------------------------");

// 배열의 순서 바꾸기
arr1 = [1, 2, 3, 4, 5];
console.log("10", arr1);
console.log("11", arr1.reverse());

// 배열이 중첩 해제
arr1 = [1, 2, 3, [4, 5, [6, [7, 8]]]];
console.log("12", arr1.length);
console.log("13", arr1.flat()); // 1 level 중첩 해제
console.log("14", arr1.flat(2));
console.log("15", arr1.flat(3));

// 특정문자열로 항목 채우기

console.log("-------------------------");

console.log("16", fruits);
// console.log(fruits.fill('🍕'));
// console.log(fruits.fill('🍕', 3));
console.log("17", fruits.fill("🍕", 3, 4));

console.log("-------------------------");

let textArr = ["a", "b", "c"];
console.log("18", textArr);
console.log("19", textArr.join()); //모든요소 이어붙임
console.log("20", textArr.join(" : ")); //모든 요소를 : 추가함

console.log("-------------------------");

fruits.forEach((item, index) => console.log("21", `item[${index}]--> ${item}`)); //인덱스 1일땐 1아이템 나옴 갯수만큼 콘솔로그돌음

// for(let i =0; i < fruits.length; i++) {
//   console.log(`fruits[${i}] = ${fruits[i]}`);
// }
