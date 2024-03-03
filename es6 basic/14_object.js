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
