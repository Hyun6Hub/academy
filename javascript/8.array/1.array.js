/* 
primitve DateType - 메모리주소에 값이 저장되는 형식
: number, string, boolean
let number = 10;
Reference DataType - 메모리주소에 heap에 생성된 객체의 주소가 저장되는 형식
: object literal ({}), class, array([], new Array), Built-in object 
Let obj = {name:'홍길동'}
Let array = [date1, date2, ...]

** Array(배열) - 동일한 데이터타입을 가진 데이터들이 저장, 인덱스를 통해 호출
Let array = [1,2,3,4,5]
Let array2 = ['1','2' ..]
Let array3 = [{key:value},{key:value},{...}..]
Let obj1 = {key:value..}
Let obj2 = {key:value}
Let array4 = [obj1, obj2]
Let array5 = new Array(사이즈); // CRUD
Array 생성은 [], new 사용하고, CRUD 작업시에는 메소드 호출을 권장
제어문의 for문 사용을 정확히 이해
배열의 인덱스는 전체사이즈보다 하나 작다
*/

//배열 생성
let array1 = new Array(2); // 선언됨 메모리의 공간까지 만들어줌 선언과 메모리주소(할당), 대문자면 class다
console.log("1", array1);

let array2 = new Array(1, 2, 3); // 선언과 메모리주소 할당, item 저장
console.log("2", array2);

let array3 = [2, 4, 6]; //[] Array literal (배열 리터럴)
console.log("3", array3);

let array4 = Array.from(array3);
// let array3 = array4
console.log("4", array4);

console.log("5", array3 === array4); //객체를 같이 바라봄  똑같은 메모리주소 공유 별도의 객체 만들어 사용하는가

let array5 = Array.from({
  0: 2,
  1: 4,
  2: 6,
  length: 3,
});
console.log("6", array5); //2
console.log("7", array1.length - 1); //0,1
// 2-1 은 1 [] 불필요

new Array(2);
// [undefined, undefined]
let array6 = [1, 2, "홍길동"];
console.log("8", array6);
