// document.addEventListener('DOMContentLoaded', function () {




// })


function showBox() {
    // 박스 추가
    const boxcontainer = document.getElementById('boxcontainer'); /* 박스담기위해 배경을 가져옴 */

    const item = document.createElement('div'); /* div가 boxcontainer로 들어감 */
    item.classList.add('item'); /* 삭제하면 클래스가 안달림 */

    boxcontainer.appendChild(item); /* 붙인다 */

    // 갯수 표시
    const result = document.getElementById('result')
    const items = boxcontainer.children; /* boxcontainer의 아들을 갯수로 */
    result.innerHTML = items.length /* 그 갯수를 센다 */
}
