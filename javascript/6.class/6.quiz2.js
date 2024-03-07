/* 
로그인변수로 아이디 비번 못불러옴 플랫폼이 달라서
브라우저 통해서 받아와야함 
다른애를 가지고 브라우저에 못감 jsp는
*/
// User 클래스
// 속성 : #id, #pass
// 메소드 : setter/getter, info
class User {
  #id;
  #pass;
  constructor(id, pass) {
    this.#id = id;
    this.#pass = pass;
  }
  get id() {
    return this.#id;
  }
  get pass() {
    return this.#pass;
  }
  get info() {
    return `${this.#id}, ${this.#pass}`;
  }

  set id(id) {
    this.#id = id;
  }
  set pass(pass) {
    this.#pass = pass;
  }
}

// 로그인 호출 함수
function loginCheck() {
  // console.log(`로그인 버튼!!`);
  const id = document.querySelector("#id").value; // test
  const pass = document.querySelector("#pass").value; // 1234
  const loginUser = new User(id, pass);
  console.log(loginUser.info);
}
