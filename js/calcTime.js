const calcInput = document.querySelector(".calc-time__input");
const calcSearch = document.querySelector(".calc-time__btn");
const calcPole = document.querySelector(".calc-time__result");

calcSearch.addEventListener("click", () => {
  let userMinuts = Number(calcInput.value);

  if (userMinuts < 0) {
    alert("Please enter a valid number of minutes");
    return;
  }

  let days = Math.floor(userMinuts / 1440);
  userMinuts %= 1440;

  let hours = Math.floor(userMinuts / 60);
  let minutes = userMinuts % 60;

  calcPole.textContent = `${days}d. ${hours}h:${minutes}m`;
});
