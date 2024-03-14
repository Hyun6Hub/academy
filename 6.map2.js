//map 생성
const flist = new Map([['apple','🍔'],['orange','🧂']])
// map에서 사용하는 객체형태로 바꿔줌

//사이즈확인
console.log('size',flist.size)

//데이터 추가
flist.set( 'banana','🌶')

// 데이터 존재확인
console.log(flist.has('kiwi'));

console.log(flist.keys);