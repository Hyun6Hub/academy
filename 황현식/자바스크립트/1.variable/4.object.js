let apple = {
  name: "apple",
  color: "red",
  display: "빨강사과",
}; //let apple =
console.log(apple);
apple.color = "green";
console.log(apple);
/* console.log면 낱개로 나오고
apple.color쓰면 다나옴 */

let orange = {
  name: "orange",
  color: "orange",
  display: "노란오렌지",
};
console.log(orange);
apple.color = "green";
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);
