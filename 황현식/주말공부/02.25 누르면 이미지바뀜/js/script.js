const imgSrc = ['./image/apple.jpg', './image/banana.jpg']
let cur = 0;

function jpgimage() {
    let next = cur + 1;

    if (imgSrc.length - 1 < next) {
        next = 0;
    }

    document.getElementById('jpg').src = imgSrc[next]
    cur = next;

}

