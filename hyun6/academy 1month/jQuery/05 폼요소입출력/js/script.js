

$(function () {  //ex1
  $('.ex1 button').click(function () {
    var num = parseFloat($('.ex1 input').val()) //'3.12345' -> 3.12345
    //3.12345 * 100 => 3123.345 =>312
    //3123 /100 = 3.12
    num = parseInt(num * 100)
    num = num / 100
    $('.ex1 .print').html(num)

  })
})



$(function () {                                                //ex2
  $('.ex2 button').click(function () {
    var num = parseFloat($('.ex2 input').val())  //1.2345
    num = parseFloat(num.toFixed(2))   //'1.23' -> 1.23
    $('.ex2 .print').html(num)
  })

})




$(function () {                                            //ex3
  $('.ex3 button').click(function () {
    var num = $('.ex3 select').val()
    $('.ex3 .print').html(num)

  })
})

$(function () {                                         //ex4
  $('.ex4 select').change(function () {
    var num = $('.ex4 select').val()
    $('.ex4 .print').html(num)

  })
})

$(function () {                                       //ex5
  $('.ex5 button').click(function () {
    //체크가된 라디오 버튼의 값
    var gender = $('.ex5 input:checked').val()
    $('.ex5 .print').html(gender)
  })
})

$(function () {                                     //ex6
  $('.ex6 input').change(function () {
    var num = $('.ex6 input:checked').val()
    $('.ex6 .print').html(num)
  })
})

$(function () {                                             //ex7
  $('.ex7 input').bind('input', function () {
    var num1 = parseInt($('.ex7 .num1').val())
    var num2 = parseInt($('.ex7 .num2').val())
    var sum = num1 + num2
    $('.ex7 .print').html(sum)
  })
})


$(function () {
  $('.ex8 .first-name, .ex8 .last-name').bind('input', function () {
      var firstname = $('.ex8 .first-name').val();
      var lastname = $('.ex8 .last-name').val();
      var gender = $('.ex8 .gender input:checked').val();
      $('.ex8 .print').html(`
          이름:${firstname}${lastname}, 성별:${gender}
      `);
  });

  $('.ex8 .gender input').change(function () {
      var firstname = $('.ex8 .first-name').val();
      var lastname = $('.ex8 .last-name').val();
      var gender = $('.ex8 .gender input:checked').val();
      $('.ex8 .print').html(`
          이름:${firstname}${lastname}, 성별:${gender}
      `);
  });
});
/* 변수 문자 같이쓰려면 템플릿 리터럴 */
/* 인풋은 4개말하는거니까 안됨 젠더 안에있는걸로 띄어쓰기는 안에있는 */
/* 
$('.ex9 select').change(function(){
})
 */


$('.ex9 select').bind('input', function () {

  var num1_1 = $('.ex9 .num1-1').val()
  var num1_2 = $('.ex9 .num1-2').val()
  var num1 = parseInt(num1_1 + num1_2)
  var num2_1 = $('.ex9 .num2-1').val()
  var num2_2 = $('.ex9 .num2-2').val()
  var num2 = parseInt(num2_1 + num2_2)
  var sum = num1 + num2
  $('ex9 input').val(sum) //html아니고 val print아니고 input 괄호안에 sum
})

/*
$(function () {
  $('ex8 input').bind('input', function () {

    $('ex8. print').html()
  })
})
*/






