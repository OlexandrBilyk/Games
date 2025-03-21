const operators = document.querySelectorAll(".calc-area__operators");
const equal = document.querySelector("#equal");
const num1 = document.querySelector("#calcNum1");
const num2 = document.querySelector("#calcNum2");
const resultPole = document.querySelector(".calc-area__result");
let result;
let currentOperation = "";

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    currentOperation = operator.id;
  });
});
const calc = function () {
  if (num1.value.trim() === "" || num2.value.trim() === "") {
    alert("please enter the numbers");
    return;
  } else {
    let first = Number(num1.value);
    let second = Number(num2.value);

    switch (currentOperation) {
      case "plus":
        result = first + second;
        break;
      case "minus":
        result = first - second;
        break;
      case "multiply":
        result = first * second;
        break;
      case "divide":
        if (second === 0) {
          result = "Erorr";
          break;
        } else {
          result = first / second;
          break;
        }
      default:
        alert("please select a sign");
        result = "Результат";
        break;
    }

    resultPole.textContent = result;
  }
};

equal.addEventListener("click", () => {
  calc();
  currentOperation = "";
});
