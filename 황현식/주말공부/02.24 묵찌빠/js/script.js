function box1() {
    const my_b = document.getElementById('my')
    my_b.innerHTML = '묵'

    com('묵')
    // const com_b = document.getElementById('com')
    // const result_b = document.getElementById('result');

    // switch (Math.floor(Math.random() * 3)) {
    //     case 0:
    //         com_b.innerHTML = '묵'
    //         result_b.innerHTML = '비김';

    //         break;

    //     case 1:
    //         com_b.innerHTML = '찌'
    //         result_b.innerHTML = '이김';
    //         break;

    //     case 2:
    //         com_b.innerHTML = '빠'
    //         result_b.innerHTML = '졌음';
    //         break;
    // }

}

function box2() {
    const my_b = document.getElementById('my')
    my_b.innerHTML = '찌'

    com('찌')

    // const com_b = document.getElementById('com')
    // const result_b = document.getElementById('result');

    // switch (Math.floor(Math.random() * 3)) {
    //     case 0:
    //         com_b.innerHTML = '묵'
    //         result_b.innerHTML = '졌음';

    //         break;

    //     case 1:
    //         com_b.innerHTML = '찌'
    //         result_b.innerHTML = '비김';
    //         break;

    //     case 2:
    //         com_b.innerHTML = '빠'
    //         result_b.innerHTML = '이김';
    //         break;
    // }
}

function box3() {
    const my_b = document.getElementById('my')
    my_b.innerHTML = '빠'

    com('빠')
    // const com_b = document.getElementById('com')
    // const result_b = document.getElementById('result');

    // switch (Math.floor(Math.random() * 3)) {
    //     case 0:
    //         com_b.innerHTML = '묵'
    //         result_b.innerHTML = '이김';

    //         break;

    //     case 1:
    //         com_b.innerHTML = '찌'
    //         result_b.innerHTML = '졌고';
    //         break;

    //     case 2:
    //         com_b.innerHTML = '빠'
    //         result_b.innerHTML = '비빔';
    //         break;
    // }
}

function com(my) {
    const com_b = document.getElementById('com')
    const result_b = document.getElementById('result');

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            com_b.innerHTML = '묵'

            if (my === '묵') {
                result_b.innerHTML = '비김';
            } else if (my === '찌') {
                result_b.innerHTML = '졌음';
            } else {
                result_b.innerHTML = '이김';
            }

            break;

        case 1:
            com_b.innerHTML = '찌'


            if (my === '묵') {
                result_b.innerHTML = '이김';
            } else if (my === '찌') {
                result_b.innerHTML = '비김';
            } else {
                result_b.innerHTML = '짐';
            }

            break;

        case 2:
            com_b.innerHTML = '빠'


            if (my === '묵') {
                result_b.innerHTML = '졌음';
            } else if (my === '찌') {
                result_b.innerHTML = '이김';
            } else {
                result_b.innerHTML = '이김';
            }

            break;
    }
}