//iteralbe(이터러블) 순회가 가능한 객체인가 아닌가 Object -> Iteration protocol 가지고 있는가 순회를 위한 규칙
// for...of, ...(spread), destricting object(구조분해할당)내부적으로 순회가 가능한객체
//내부적으로 이터레션 프로토콜 가지고있는 객체
// string, array, map, set ...이 있다

const text = 'hello'
for(let str of text) {
    for(let i; i < text.length; i++){

    }
console.log('text[i]: ',text[i]);
}

// 12345 배열생성후 출력

const numlist = [1,2,3,4,5]
for(let number of numlist) console.log(number);

//숫자 100을 변수에 저장 출력 : for...of??
const num = 100
for(let value 100 of num)console.log(value); //

