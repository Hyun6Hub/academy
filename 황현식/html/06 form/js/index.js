$(function(){
$('join-form').submit(function(){
  let id = $('input[name=user-id]').val()
  let pw = $('input[name=user-pw]').val()
  if(!id || !pw){
    alert('id와 비번을 입력하세요')

  }
})
})