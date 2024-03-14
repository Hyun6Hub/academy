function a() {
  console.log("a");
  setTimeout(function () {
    console.log("(비동기식)setTimeout!!!");
  }, 3000);
}

function b() {
  a();
  console.log("b");
}

b();

//stack --> LIFO(Last In First Out)
/* 

a() 
---------   settimeout
b()
----------  ---------------
call stack        apl
                 콜백함수
                 ------------
                  task queue
===========
a
b
비동기식 settimeout    

a b 콜스택 들어가고 settimeout은 콜백함수 들어가면 콜스택 들어간게 나온다
*/
