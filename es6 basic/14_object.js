/* object 객체 */

let yujin = {
  name: "유진",
  group: "아이브",
  dance: function () {
    return `${this.name}이 춤을 춘다`;
  },
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin["name"]);

const key = "name";

console.log(yujin[key]);

console.log(yujin.dance());

const namekey = "name";
const namevalue = "유진";

const groupkey = "group";

/* 
1. const로 선언할 경우 객체 자체를 변경 할 수는 없다.
2. 객체안의 프로퍼티나 메서드는 변경 할 수 있다.
*/
