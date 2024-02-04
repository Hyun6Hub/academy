/* false, '', 무효값, 0, NaN 계산하다 오류가남  indefined 값이 비었다 값 지정안했을때 null 빈거확인 */

/* if(){
  alert('유효')  /* 조건이 참이면 실행됨 */



$(function () { /* ex1 */
  $('.ex1 button').click(function () {
    var boolean = confirm('성년이니')
    if (boolean === false) {
      alert('사이트 접속 안돼용')
    }
  })
})

/* boolean yes or no confirm 확인또는 취소  if가 한줄이면 {}생략가능
  if(!) ~가 아니라면, 무효하니 */

/*  var result
  if(num === '2') result = 'o'
  
  else result = 'x'  변수의 값이 둘중하나니까안씀
      var result = num === '2' ? :*/


      $(function () {  /* ex2 */
      $('.ex2 button').click(function () {
        var inputText = $('.ex2 input').val();
        var num = parseInt(inputText);
    
        if (!inputText.trim() || isNaN(num)) {
          alert('숫자를 입력해야 합니다.');
          return;
        }
    
        $('.ex2 .print').html((num === 2) ? '정답' : '오답');
      });
    });


$(function()){  /* ex3 */
  $('.ex3').submit(function (e) {
    e.preventDefault()
var num1 = parseInt($('.ex3 input:first-of-type').val())
var num1 = parseInt($('.ex3 input:last-of-type').val())
var result = num1 + num2
$('.ex3 .print').html(result)
  })
}

$(function(){ /* ex4 */
$('.ex4').submit(function(e){
e.preventDefault()
var prdname = $('.ex4 select option:selected').html() /* 선택이 되어있는 옵션 */
var price = parseInt($('.ex4 select').val())
var cnt = parseInt(=$('ex4 input[type=number]').val())
var age = $('.ex4 input[type=radio]:checked')
console.log(prdname, price, cnt, age);
if(prdname==='주류' && age==='child'){  /* 비교연산 2개 논리연산 하나 */
alert('구입할 수 없는 상품')
return
}
var totalprice = price * cnt
$('.ex4 .print').html(totalprice)
})
})

$(function(){ /* ex5 */
$('.ex5 button').click(function(){

})
})