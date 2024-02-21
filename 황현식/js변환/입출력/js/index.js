$(function () {  //ex1
    $('.ex1 button').click(function () {
        var num = parseFloat($('.ex1 input').val())
        num = parseInt(num * 100)
        num = num / 100
        $('.ex1 .print').html(num)

    })
})



document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.ex1 button');
    button.addEventListener("click", function () { /*위에 선언했는데 또함 var버튼, 버튼.add 두개*/
        var inputvalue = parseFloat(document.querySelector('.ex1 input').value)
        num = parseInt(inputvalue * 100) /* num대신 inputvalue온다 */
        num = num / 100
        var printElement = document.querySelector('.ex1 .print');
        printElement.innerHTML = num;
    });
});



$(function () {                                                //ex2
    $('.ex2 button').click(function () {
        var num = parseFloat($('.ex2 input').val())
        num = parseFloat(num.toFixed(2))
        $('.ex2 .print').html(num)
    })

})


document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.ex2 button');
    button.addEventListener("click", function () {
        var inputValue = parseFloat(document.querySelector('.ex2 input').value);
        var num = parseFloat(inputValue.toFixed(2));/* num에 input왜옴 */
        var printElement = document.querySelector('.ex2 .print');
        printElement.innerHTML = num;
    });

});


$(function () {                                            //ex3
    $('.ex3 button').click(function () {
        var num = $('.ex3 select').val()
        $('.ex3 .print').html(num)

    })
})



document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.ex3 button');
    button.addEventListener('click', function () {
        var selectElement = document.querySelector('.ex3 select'); /* value를 .ex3 select뒤에 안붙이고 궅이 selectElement로 빼야하나*/
        var num = selectElement.value;
        var printElement = document.querySelector('.ex3 .print');
        printElement.innerHTML = num;
    });
});




$(function () {                                         //ex4
    $('.ex4 select').change(function () {
        var num = $('.ex4 select').val()
        $('.ex4 .print').html(num)

    })
})

document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('.ex4 select');
    selectElement.addEventListener('change', function () {
        var num = selectElement.value;
        var printElement = document.querySelector('.ex4 .print');
        printElement.innerHTML = num;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('.ex4 select');
    selectElement.addEventListener('change', function () {
        var num = selectElement.value;
        var printElement = document.querySelector('.ex4 .print');
        printElement.innerHTML = num;
    })
})

$(function () {                                       //ex5
    $('.ex5 button').click(function () {
        //체크가된 라디오 버튼의 값
        var gender = $('.ex5 input:checked').val()
        $('.ex5 .print').html(gender)
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.ex5 button');
    button.addEventListener('click', function () {
        // 체크된 라디오 버튼의 값
        var radioButtons = document.querySelectorAll('.ex5 input[type="radio"]');
        var gender;
        radioButtons.forEach(function (radioButton) {
            if (radioButton.checked) {
                gender = radioButton.value;
            }
        });
        var printElement = document.querySelector('.ex5 .print');
        printElement.innerHTML = gender;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var button = this.document.querySelector('.ex5 button');
    button.addEventListener('click', function () {
        var radioButton = document.querySelectorAll('.ex5 input[type="radio"]');
        var gender;
        radioButton.forEach(function (radioButton) {
            if (radioButton.checked) {
                gender = radioButton.value;
            }
        });
        var printElement = document.querySelector('.ex5. print');

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


$(function () {                                                           /* ex8 */
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



























