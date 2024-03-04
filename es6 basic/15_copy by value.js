/* 
copy by value 값에 의한 전달
copy by reference 참조에 의한 전달

기본적으로 모든 primitive 값은 copy by value다
객체는 copy by reference다

*/


// 값 참조
// 숫자, 문자열
const a = 1;
const b = '1';

// 주소값(reference) 참조
// Array, Object, Map, Set
const ref_array = [1,2,3];
// ref_array = [1,2,3]의 주소값(0x1237jasbd123) = [1,2,3]

ref_array = 'asd' // error
ref_array[2] = '123123'  // ok 주소값안바뀌니까

const ref_obj = {
    key: 'value'
}

ref_obj = 123123 // error
ref_obj.key = 123123 // ok 
 