let ex1Fn = function (e) {
  let num = e.target.value
  alert(num)
}

{/* ex2 */
    document.querySelectorAll('.ex2 button').forEach(v => {
      v.addEventListener('click', e => alert(e.target.innerHTML))
    })
}



const sum_arrow = (a,b) => {
  return a+b;
}

const sum_arrow_2 = (a,b) => a+b;

function sum(a,b,c = 10) {
  return a+b+c;
}

const result = sum(1,2)
// 3

function custom_console(str){
  console.log(str)
}

const result2 = custom_console('asdasd')
// undefined


function execFunc(func, funcParam1, pr2){
  return func(funcParam1, pr2);
}

const result3 = execFunc(sum, 1,2)
// 3

const result4 = execFunc((v1,v2) => v1+v2,[1,2] )
// 3



{/* ex3 */
  document.querySelector('.ex3 button').addEventListener('click', e => {
    let num1 = parseInt(document.querySelector('.ex3 .num1').value)
    let num2 = parseInt(document.querySelector('.ex3 .num2').value)
    let sum = num1 + num2
    document.querySelector('.ex3 .print').innerHTML = sum
  })
}

{/* ex4 */
  document.querySelectorAll('.ex4 button').forEach(btn => {
    btn.addEventListener('click', e => {
      document.querySelectorAll('.ex4 button').forEach(btn => btn.style.color = 'black')
      e.target.style.color = 'red'
    })
  })
}

{/* ex5 */
  document.querySelectorAll('.ex5 div').forEach(div => {
    div.addEventListener('click', e => {
      document.querySelectorAll('.ex5 div').forEach(div => div.style.backgroundColor = 'transparent')
      let bg = e.currentTarget.getAttribute('data-bg')
      e.currentTarget.style.backgroundColor = bg
    })
  })
}

{/* ex6 */
  const getRandomNum = () => Math.floor(Math.random() * 10)
  document.querySelectorAll('.ex6 p:not(.print)').forEach(p => {
    p.querySelector('.num1').innerText = getRandomNum()
    p.querySelector('.num2').innerText = getRandomNum()
  })

  document.querySelector('.ex6').addEventListener('submit', e => {
    e.preventDefault()
    let point = 0
    document.querySelectorAll('.ex6 p:not(.print)').forEach(p => {
      let num1 = parseInt(p.querySelector('.num1').innerText)
      let num2 = parseInt(p.querySelector('.num2').innerText)
      let sum = parseInt(p.querySelector('input').value)
      if (num1 + num2 === sum) point++
    })
    document.querySelector('.ex6 .print').innerText = point
  })
}

{/* ex7 */
  document.querySelectorAll('.ex7 input').forEach(input => {
    input.addEventListener('change', e => {
      if (e.target.checked) e.target.parentElement.style.background = 'red'
      else e.target.parentElement.style.background = 'white'
    })
  })
}

{/* ex8 */
  document.querySelectorAll('.ex8 button').forEach(btn => {

  })
}












