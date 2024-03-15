/** 중복제거 함수 */
export function duplicateCheck(...data) {
  //...은 배열로 받는다
  return new Set(...data);
}

// duplicateCheck(1,2,3,4)
// data => [1,2,3,4]

/** 배열의 아이템을 교체하는 함수 */
export const replaceElement = (array, origin, target) => {
  array.forEach((element, i) => {
    //element 순환하면서 i에 그요소를 받는다
    if (element === origin) array.splice(i, 1, target); // i부터 2번째 인자 갯수만큼지우고  그자리에 target삽입
  });
  return array;
};

/** 검색하는 아이템을 필터링하여 출력하는 함수 */
export const searchElement = (array, filter_element) => {
  return array.filter((element) => element === filter_element);

  //  return array.filter( element => {
  //   if(element === filter_element){
  //     return element;
  //   }
  //  });
};

export function add(number1, number2) {
  return number1 + number2;
}
// calculator에서 import를 써서 commons에선 함수앞에 export를 써줌
