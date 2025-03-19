const arrowBtn = document.querySelector(".nav-list__btn");
const dropdawn = document.querySelector("#navDropdawn");

arrowBtn.addEventListener("click", () => {
  dropdawn.classList.toggle("hidden");
});

dropdawn.addEventListener("click", function (event) {
  isPlaying = document.body.classList.contains("playing");
  isNumerical = document.body.classList.contains("numerical");
  isAcquaintance = document.body.classList.contains("acquaintance");
  if (event.target.textContent === "Числовий") {
    if (isPlaying || isAcquaintance) {
      document.body.classList.remove("playing");
      document.body.classList.remove("acquaintance");
      document.body.classList.add("numerical");
    } else {
      document.body.classList.add("numerical");
    }
  } else if (event.target.textContent === "Ігровий") {
    if (isNumerical || isAcquaintance) {
      document.body.classList.add("playing");
      document.body.classList.remove("acquaintance");
      document.body.classList.remove("numerical");
    } else {
      document.body.classList.add("playing");
    }
  } else if (event.target.textContent === "Ознайомчий") {
    if (isPlaying || isNumerical) {
      document.body.classList.remove("playing");
      document.body.classList.add("acquaintance");
      document.body.classList.remove("numerical");
    } else {
      document.body.classList.add("acquaintance");
    }
  }
});
