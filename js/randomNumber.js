const numberSerchBtn = document.querySelector(".number__btn");
const numberTextPole = document.querySelector(".number__text");
const generateRandomNumber = function () {
  return Math.floor(Math.random() * 3) + 1;
};
numberSerchBtn.addEventListener("click", function () {
  const input = numberSerchBtn.previousElementSibling;
  let number = generateRandomNumber();
  if (Number(input.value) === number) {
    numberTextPole.textContent = `Вітаю, ви вгадали число! ${number} `;
    numberTextPole.style.color = "#039900";
  } else {
    numberTextPole.textContent = `Ви програли, комп’ютер загадав ${number} `;
    numberTextPole.style.color = "#900";
  }
});
