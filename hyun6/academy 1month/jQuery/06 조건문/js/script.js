/* 
조건문법
if(조건){실행문}
if else문 :
it(조건){
  실행문/조건이 만족될 경우 실행
}else{
  실행문/ 조건이 만족되지 않을 경우 실행
}

비교연산자
>, <, >=, <=, ===, !==

논리연산자
&&(and) 앤퍼센트
| (or, 거나 , 또는 )-> 조건 하나만 참이면 최종 참   
-else if문



if(조건1){
샐행문1
}else if(조건2){

}else{

}

var n =math.random() *3 ->0.000001 ~ 2.999999
math.ceil(n) -> 1 ~ 3
math.floor(n) -> 0 ~ 2

5~8사이
math.cell(math.random() *4 + 4)    5~8사이는 4개 

268 - 1568
math.cell (math.random() * (1568-268+1) + 267)

*/

$(function () {
  $('.ex1 button').click(function () {
    var num = parseInt($('.ex1 input').val())
    //사용자가 입력한 숫자가 5보다 크다라면

    if (num > 5) {
      $('.ex1 .print').html('o');
    } else {
      $('.ex1 .print').html('x');
    }
  });
});



$(function () {
  $('.ex2 button').click(function () {
    var num = parseInt($('.ex2 input').val());

    // 사용자가 입력한 숫자가 3과 일치하는지 확인
    if (num === 3) {
      $('.ex2 .print').html('정답');
    } else {
      $('.ex2 .print').html('오답');
    }
  });
});



$(function () {   /* ex3 */
  $('.ex3 button').click(function () {
    var num = $('.ex3 input').val
    var result
    if (num === '1') {

    } else if (num === '2') {
      result = 'three'
    } else if (num === '3') {
      result = '잘못입력'
    }
    $('ex3 .print').html(result)
  })
})

$(function () { /* ex4 */
  $('.ex4 button').click(function () {
    var num = parseInt($('.ex4 input').val())
    var result


    if (num >= 5 && num <= 10) {   /* 비교연산자 2개면 그사이에 논리연산자 넣어야함 */
      result = 'o';
    } else {

      result = 'x';
    }
    $('.ex4 .print').html(result);

  });
});

$(function () { /* ex5 */
  $('.ex5 button').click(function () {
    var num = parseInt($('.ex5 input').val())
    var result;


    if ((num >= '5' && num <= 10) || (num >= 19 && num <= 20)) { //and or섞여있을때 범위묶음  
      result = 'o'
    } else {

      result = 'x'
    }
    $('.ex5 .print').html(result);

  })
})

$(function () { /* ex6 */
  $('.ex6 button').click(function () {
    var num = parseInt($('.ex6 input').val())
    var result;


    if (num % 2 === 0) {
      result = '짝수맞아'
    } else {

      result = '짝수아냐'
    }
    $('.ex6 .print').html(result);

  })
})

$(function(){ /* ex7 */
$('.ex7 button').click(function(){
  



})
})




var randnum = math.ceil(math.random()) * 3)
  $('.ex7 b').html(nandom)





$('.ex8 button').click(function () {
  var num = $('.ex8 input:checked').val()
  var result
  if (str === 'play') {
    result = 'stop'

  } else {//str == 'stop'
    result = 'play'
  }
  $('.ex8 button').html(result)
})



$(function () {
  $('.ex8 button').html()

})


$(function(){ /* ex9 */
$('.ex9 button').click(function(){
  var rum = parseInt($('.ex9 button').html())
  var result
  if(
    num>=10&&num<=20&&num%22===0
    
    num>=30&&num<=20&&num%22===1

  ){
    result = '정답'

  }else{ //str == 'stop'

  }result = '오답'

  $('.ex9 .print').html(result)

  )
})

$(function(){ /* ex10 */
$('.ex10 button').click(function(){
  var 가격 parseInt=($('.ex10 .prd input:checked').val())// 1000 2000 3000
  var 상품명 =$('.ex10 .prd input:checked').html()// 과자 음료 담배
  var 수량 parseInt=($('.ex10 .cnt input:checked').val())// 1 2 3
  var 성인 =$('.ex10 .prd input:checked').val()//성인 미성인
var result
  if(연령==='child' && 상품명==='담배'){//미성년이 담배를 선택했다면
  result = '구입할수없는상품'
    
}else{
  result = 가격 + 수량
}
$('.ex10 .print').html(result)
})
})



