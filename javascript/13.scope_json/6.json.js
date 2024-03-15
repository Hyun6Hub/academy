// REST API : Representation State Transfer API(Application Interface)
//            : 웹 서비스 REST 아키텍처 구조를 따르는 형식
// JSON : JavaScript Object Notation
// JSON 구조 : { property: value, c:{}, d:[{},{}...]}
// 웹서비스를 통해 제공되는 데이터들은 JSON 형식으로 제공되는 경우가 많음
const dataList = {
  name: 'hong',
  age: 20,
  hobby: ['게임','음악','노래','등산']
}
console.log(dataList.name);
console.log(dataList.age);

dataList.hobby.forEach( data => console.log(data));

for(const data of dataList.hobby) {
  console.log('data', data);
}
console.log(dataList.hobby);


            