//spread(전개구문)
// 모든 iterable object는 사용이 가능하다 
// funtion(...iterableobj) arrry로 보면됨
//[...iterableobj]
// {...iterableobj}
// ECMAScript 2018

function add(a,b){
    console.log(a+b);
}
add(1,2)

const number = [10,20,30] //배열 이터러블 객체니까 스프레드 쓸수있다
add(...numbers)
 /* 주소를 받지말고 매개변수로 넘어와서 하나하나 매핑해서
  .을 3개빼면  스프레드 붙여서주면 객체로 주소로 넘어가지않고 요소를 넘김 우선 배열형태인데 add에서 쓸때 펼쳐줌 */
function sum(a, b, ...nums){
console.log(a, b, nums);
}
let total =0;
for(let value of nums) total +=value
return total

sum(1,2,3,4,5,6, 100,200)      // a,b하면 하나씩 매핑됨
sum(100)
sum(1,2,3,4,5,)

const  fruit1=[1,2,3]
const  fruit2=[4,5]
const fruitlist1=

const hong ={
    name: 홍,
    age:10,
    address: '설'
}
console.log('hong'hong);