const yearSerchBtn = document.querySelector(".year__btn");
const yearTextPole = document.querySelector(".year__text");

yearSerchBtn.addEventListener("click", function () {
  const input = yearSerchBtn.previousElementSibling;
  if (Number(input.value) % 4 === 0) {
    yearTextPole.textContent = "Ви народилися у високосний рік";
    yearTextPole.style.color = "#039900";
  } else {
    yearTextPole.textContent = "Ви народилися у не високосний рік";
    yearTextPole.style.color = "#900";
  }
});
