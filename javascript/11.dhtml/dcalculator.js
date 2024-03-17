import { sum, sub, mul, div } from "./dcommons.js";

// initForm
initForm();

function initForm() {
  const output = `
  <ul>
    <li>
      <label>숫자1</label>
      <input type="text" name="number1" id="number1" placeholder="number1">
    </li>
    <li>
      <label>숫자2</label>
      <input type="text" name="number2" id="number2" placeholder="number2">
    </li>
    <li>
      <button type="button" id="btnSum" class="btn-operation" data-operation="sum"> + </button>
      <button type="button" id="btnMin" class="btn-operation" data-operation="min"> - </button>
      <button type="button" id="btnMul" class="btn-operation" data-operation="mul"> * </button>
      <button type="button" id="btnDiv" class="btn-operation" data-operation="div"> / </button>
    </li>
  </ul>
  <h3>
    Result : <span id="result"></span>
  </h3>
  `;

  //! 동적으로 생성된 HTML 태그의 이벤트 처리는 반드시 브라우저에 실행된 후에 진행되어야 함!!!
  document.querySelector("#content").innerHTML = output;

  const operationButtonList = document.querySelectorAll(".btn-operation");

  operationButtonList.forEach((button) => {
    button.addEventListener("click", () => {
      const number1 = parseInt(document.querySelector("#number1").value);
      const number2 = parseInt(document.querySelector("#number2").value);

      let resultOperation = 0;
      let operation = button.dataset.operation;

      switch (operation) {
        case "sum":
          resultOperation = sum(number1, number2);
          break;
        case "sub":
          resultOperation = sub(number1, number2);
          break;
        case "mul":
          resultOperation = mul(number1, number2);
          break;
        case "div":
          resultOperation = div(number1, number2);
          break;
      }
      console.log(resultOperation);
      document.querySelector("#result").textContent = resultOperation;
    }); // click event
  }); // forEach

  /*
  document.querySelector('#btnSum').addEventListener('click', () => {
    const number1 = parseInt(document.querySelector("#number1").value);
    const number2 = parseInt(document.querySelector("#number2").value);

    document.querySelector("#result").textContent = sum(number1, number2);
  });

  document.querySelector('#btnMin').addEventListener('click', () => {
    const number1 = parseInt(document.querySelector("#number1").value);
    const number2 = parseInt(document.querySelector("#number2").value);

    document.querySelector("#result").textContent = sub(number1, number2);
  });

  document.querySelector('#btnMul').addEventListener('click', () => {
    const number1 = parseInt(document.querySelector("#number1").value);
    const number2 = parseInt(document.querySelector("#number2").value);

    document.querySelector("#result").textContent = mul(number1, number2);
  });

  document.querySelector('#btnDiv').addEventListener('click', () => {
    const number1 = parseInt(document.querySelector("#number1").value);
    const number2 = parseInt(document.querySelector("#number2").value);

    document.querySelector("#result").textContent = div(number1, number2);
  });
  */
}
