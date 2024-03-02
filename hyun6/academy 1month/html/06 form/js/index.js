/* 문자값의 유뮤에 의한 유효성 체크
$(function(){
  $('.join-form').submit(function(e){
    var id = $('input[name=user-id]').val()
    var pw = $('input[name=user-pw]').val()
    //NaN undefined null 0 ''
    if(!id || !pw){
      alert('id와 비번을 입력하세요')
      e.preventDefault()
    }
  })
})
*/

/* 정규식,regExp (문자의형태를분석하는 문법) 검사
$(function(){
  $('.join-form').submit(function(e){
    var userName = $('input[name=user-name]').val()
    var reg = userName.match(/^[가-힣]+$/gm)//userName.match(/정규식표현/옵션)
    console.log(reg);
    if(!reg){
      alert('한글만 입력하세요')
      e.preventDefault()
    }
  })
})
*/

/* 
$(function(){
  $('.join-form').submit(function(e){
    if(!$('.hobby:checked').size()){
      alert('적어도 한개 이상의 취미를 체크해 주세요')
      e.preventDefault()
    }
  })
})
*/


