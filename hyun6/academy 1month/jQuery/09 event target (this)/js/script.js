$(function () {/* ex1 */
  function fn(target) {
    var num = target.val()
    alert(num)
  }

  $('.ex1 button').click(function () {
    fn( target)
  })
})

$(function () {/* ex2 */
  $('.ex2 a').click(function (e) {
    e.preventDefault()
    var url = $(this).attr('href')
    var site = $(this).attr('data-sitename')
    if (confirm(`${site}로 이동하시겠습니까?`)) location.href = url
  })
})

$(function () {/* ex3 */
  $('.ex3 div').click(function () {
    $('.ex3 div').css({ 'background': 'none' })
    var bg = $(this).attr('data-bg')
    $(this).css({ 'background': bg })
  })
})

$(function () {/* ex4 */
  $('.ex4 button').click(function () {
    var n = $(this).html() //3
    var bg = $(`.box${n}`).html()
    $('.ex4 div').css({ 'background': 'none' })
    $(`.box${n}`).css({ 'background': bg })
  })
})

$(function () {/* ex6 */
  function fn(evt, target) {
    evt.preventDefault()
    var n =  target.attr('data-n') //submit이 발생한 form의 data-n깂
    var num1 = parseInt($(`.ex6-${n} .num1`).val())
    var num2 = parseInt($(`.ex6-${n} .num2`).val())
    var result = num1 + num2
    $(`.ex6-${n} .result`).val(result)
  }

  $('.ex6 form').submit(function (e) {
    fn(e, $(this))
  })
})



