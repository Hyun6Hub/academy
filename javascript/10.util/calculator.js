import { add } from "./commons.js";

document.querySelector("#btn1").addEventListener("click", function () {
  const number1 = parseInt(document.querySelector("#number1").value);
  const number2 = parseInt(document.querySelector("#number2").value);

  const result = add(number1, number2);

  document.querySelector("#result").textContent = result;
});

// function sum() {
//   const number1 = parseInt(document.querySelector('#number1').value);
//   const number2 = parseInt(document.querySelector('#number2').value);

//   const result = add(number1, number2);

//   document.querySelector("#result").textContent = result;
// }
