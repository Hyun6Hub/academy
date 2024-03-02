$(function () {/* 1 */
  $('.ex1>div>div').click(function () {
    $(this).css({ 'background': 'red' })
    $(this).siblings().css({ 'background': 'none' })
  })
})

$(function () {/* 2 */
  $('.ex2>.box').click(function () {
    $(this).css({ 'background': '#FFF' })
    $('.ex2>.box>.box').css({ 'background': 'red' })
  })

  $('.ex2>.box>.box').click(function (e) {
    e.stopPropagation()
    $(this).css({ 'background': '#FFF' })
    $('.ex2>.box').css({ 'background': 'red' })
  })
})

$(function () {/* 3 */
  $('.ex3>.box').click(function () {
    $(this).css({ 'background': 'white' })
    $(this).children().css({ 'background': 'red' })
  })

  $('.ex3>.box>.box').click(function (e) {
    e.stopPropagation()
    $(this).css({ 'background': 'white' })
    $(this).parent().css({ 'background': 'red' })
  })
})

$(function () {/* 4 */
  $('.ex4>.box>.box').click(function () {
    /* 
    $(this).parent().siblings().children().css({'background':'red'})
    $(this).css({'background':'#FFF'})
    */
    /* 
    $('.ex4>.box>.box').css({'background':'red'})
    $(this).css({'background':'#FFF'})
    */
    $(this).css({ 'background': '#FFF' })
    $('.ex4>.box>.box').not($(this)).css({ 'background': 'red' })
  })
})

$(function () {/* 5 */
  $('.ex5 > div').click(function(){
    $(this).find('a').css({'background':'red'})
  })
})
$(function () {/* 6 */
  $('.ex6 input').bind('input',function(){
    var numbers = $(this).val()
    var maxLength = parseInt($(this).attr('maxlength'))
    if(numbers.length===maxLength){
      $(this).next().focus()
    } 
  })
})

$(function(){/* ex7 */
  function fn(){

  }
  $('.ex7 form').submit(function(){
    //fn()
  })

})


$(function(){
  $('.btn1').click(function(){
    let url = location.href
    alert(url)
  })

  $('.btn2').click(function(){
    location.href = 'http://www.naver.com'

  })

})

