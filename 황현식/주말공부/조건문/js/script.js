$(function () {                                   /*ex1 */
    $('.ex1 button').click(function () {
        var num = parseInt($('.ex1 input').val())

        if (num > 5) {
            $('.ex1 .print').html('정답')
        } else {
            $('.ex1 .print').html('오답')
        }
    })
})


document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.ex1 button');
    var input = document.querySelector('.ex1 input');
    var printElement = this.documentElement.querySelector('.ex1 .print');

    button.addEventListener('click', function () {
        var num = parseInt(input.value);
        if (num > 5) {
            printElement.innerHTML = '정답';
        } else {
            printElement.innerHTML = '오답';

        }
    })
})


$(function () {                               /* ex2 */
    $('.ex2 button').click(function () {
        var num = $('.ex2 input').val()
        var result
        if (num === '3') {
            result = '정답'
        } else {
            result = '오답'
        }
        $('.ex2 .print').html(result)
    })
})


$(function () {                             /* ex3 */
    $('.ex3 button').click(function () {
        var num = $('.ex3 input').val()
        var result
        if (num === '1') {
            result = 'one'
        } else if (num === '2') {
            result = 'two'
        } else if (num === '3') {
            result = 'three'
        } else {
            result = '잘못입력하셨습니다'
        }
        $('.ex3 .print').html(result)
    })
})




$(function () {/* ex4 */
    $('.ex4 button').click(function () {
        var num = parseInt($('.ex4 input').val())
        var result
        if (num >= 5 && num <= 10) {
            result = '정답'
        } else {
            result = '오답'
        }
        $('.ex4 .print').html(result)
    })
})

$(function () {/* ex5 */
    $('.ex5 button').click(function () {
        var num = parseInt($('.ex5 input').val())
        var result
        if ((num >= 5 && num <= 10) || (num >= 15 && num <= 20)) {
            result = '정답'
        } else {
            result = '오답'
        }
        $('.ex5 .print').html(result)
    })
})

$(function () {/* ex6 */
    $('.ex6 button').click(function () {
        var num = parseInt($('.ex6 input').val())
        var result
        if (num % 2 === 0) {
            result = '정답'
        } else {
            result = '오답'
        }
        $('.ex6 .print').html(result)
    })
})

$(function () {/* ex7 */


    var randNum = Math.ceil(Math.random() * 3)
    $('.ex7 b').html(randNum)

    $('.ex7 button').click(function () {
        var num = parseInt($('.ex7 input:checked').val())
        var result
        if (num === randNum) {
            result = '정답'
        } else {
            result = '오답'
        }
        $('.ex7 .print').html(result)
    })
})

$(function () {/* ex8 */
    $('.ex8 button').click(function () {
        var str = $('.ex8 button').html()
        var result
        if (str === 'play') {
            result = 'stop'
        } else {//str == 'stop'
            result = 'play'
        }
        $('.ex8 button').html(result)
    })
})

$(function () {/* ex9 */
    $('.ex9 button').click(function () {
        var num = parseInt($('.ex9 input').val())
        var result
        if (
            (num >= 10 && num <= 20 && num % 2 === 0)
            ||
            (num >= 30 && num <= 40 && num % 2 === 1)
        ) {
            result = '정답'
        } else {//str == 'stop'
            result = '오답'
        }
        $('.ex9 .print').html(result)
    })
})

$(function () {/* ex10 */
    var 가격 = parseInt($('.ex10 .prd input:checked').val())//1000,2000,2000
    var 상품명 = $('.ex10 .prd input:checked+b').html()//과자,음료수,담배
    var 수량 = parseInt($('.ex10 .cnt input:checked').val())//1,2,3
    var 연령 = $('.ex10 .age input:checked').val()//adult, child
    var result
    if (연령 === 'child' && 상품명 === '담배') {//미성년이 담배를 선택했다면
        result = '구입하실 수 없는 상품입니다'
    } else {
        result = 가격 * 수량
    }
    $('.ex10 .print').html(result)
})