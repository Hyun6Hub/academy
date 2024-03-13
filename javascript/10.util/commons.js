/** 중복제거 함수 */
export function duplicateCheck(...data) {
  return new Set(...data);
}

/** 배열의 아이템을 교체하는 함수 */
export const replaceElement = (array, origin, target) => {
  array.forEach((element, i) => {
    if (element === origin) array.splice(i, 1, target);
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
