$(function () {  //ex1
    $('.ex1 button').click(function () {
        var num = parseFloat($('.ex1 input').val())
        num = parseInt(num * 100)
        num = num / 100
        $('.ex1 .print').html(num)

    })
})

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.ex1 button');
    button.addEventListener("click", function () { /*위에 선언했는데 또함 const버튼, 버튼.add 두개*/
        const inputvalue = parseFloat(document.querySelector('.ex1 input').value)
        let num = parseInt(inputvalue * 100) /* num대신 inputvalue온다 */
        num = num / 100
        const printElement = document.querySelector('.ex1 .print');
        printElement.innerHTML = num;
    });
});
/* var 대신 const 쓰고나서 한줄로 다써줌 선언과 할당동시에 해줘야됨 재할당 안되니까  선언 할당 동시에해줘야댐
   num중복 되니까 let 재할당 가능  */

/
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



/
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




/* $(function () {                                     //ex6
    $('.ex6 input').change(function () {
        var num = $('.ex6 input:checked').val()
        $('.ex6 .print').html(num)
    })
}) */


document.addEventListener('DOMContentLoaded', function () {
    var input = this.document.querySelector('.ex6 input');
    input.forEach(function (input) {
        input.addEventListener('change', function () {
            var num = document.querySelector('.ex6 input:checked').value;
            document.querySelector('.ex6 .print').innerHTML = num;
        });
    });
});



/* $(function () {                                             //ex7
    $('.ex7 input').bind('input', function () {
        var num1 = parseInt($('.ex7 .num1').val())
        var num2 = parseInt($('.ex7 .num2').val())
        var sum = num1 + num2
        $('.ex7 .print').html(sum)
    })
})
 */

document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelectorAll('.ex7 num1');
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            var num1 = parseInt(document.querySelector('.ex7 .num1').value);
            var num2 = parseInt(document.querySelector('.ex7 ,num2').value);
            var sum = num1 + num2;
            document.querySelector('.ex7 .print').innerHTML = sum;
        });
    });
});


$(function () {                                                           /* ex8 */
    $('.ex8 .first-name, .ex8 .last-name').bind('input', function () { /* 이부분 js변환 한거 안보임 */
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

document.addEventListener('DOMContentLoaded', function () {
    var firstNameInput = document.querySelector('.ex8 .first-name'); /* element 안달고 firstname뒤에 input달음 */
    var lastNameInput = document.querySelector('.ex8 .last-name');
    var genderInputs = document.querySelectorAll('.ex8 .gender input'); /* all 쓰는이유 */
    var printElement = document.querySelector('.ex8 .print');

    function updatePrint() {
        var firstname = firstNameInput.value;
        var lastname = lastNameInput.value;
        var gender = document.querySelector('.ex8 .gender input:checked').value;
        printElement.innerHTML = `
            이름:${firstname}${lastname}, 성별:${gender}
        `;
    }

    firstNameInput.addEventListener('input', updatePrint);
    lastNameInput.addEventListener('input', updatePrint);

    genderInputs.forEach(function (input) {
        input.addEventListener('change', updatePrint);
    });
});



























