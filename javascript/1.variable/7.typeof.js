// ===, typeof(데이터 타입)
let a = 10;
a = 10.5;
a = "홍홍";
a = true;
a = !!0;
a = [1, 2, 3];
a = 100;
a = symbol();

let b = 10;
console.log(typeof a);
console.log(typeof a) === (typeof b ? true : false); //a,b 타입비교
