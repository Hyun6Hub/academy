
/* 
  capturing : 중첩된 구조의 요소들의 이벤트 감지 순서 (부모 -> 자식)
  bubbling : 중첩된 구조의 요소들의 이벤트 감지 후 실행 순서 (자식 -> 부모)
  e.stopPropagation() : bubbling을 중지하는 메쏘드
*/


$(function(){/* ex1 */
  $('.ex1 .box1').click(function(){
    $('.ex1 .print').html('큰박스 클릭')
  })

  $('.ex1 .box1 div').click(function(e){
    e.stopPropagation()
    $('.ex1 .print').html('작은박스 클릭')
  })
})
