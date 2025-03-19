const rpsCheckBtn = document.querySelector(".rps__btn");
const rpsTextPole = document.querySelector(".rps__text");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const rpsList = document.querySelector(".rps-list");

let userChoice = "";

let userPoints = 0;
let computerPoints = 0;

const randomRPS = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "stone";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

const UserRps = function () {
  rpsList.addEventListener("click", function (event) {
    userChoice = event.target.id;
  });
};

rpsCheckBtn.addEventListener("click", function () {
  if (!userChoice) {
    rpsTextPole.textContent = "Будь ласка, виберіть камінь, ножиці чи папір!";
    rpsTextPole.style.color = "#ffcc00";
    return;
  }

  const computerChoice = randomRPS();

  switch (computerChoice) {
    case "stone":
      if (userChoice === "stone") {
        rpsTextPole.textContent = "Нічия";
        rpsTextPole.style.color = "#ffcc00";
      } else if (userChoice === "paper") {
        rpsTextPole.textContent = "Ви виграли раунд!";
        rpsTextPole.style.color = "#039900";
        userPoints += 1;
      } else if (userChoice === "scissors") {
        rpsTextPole.textContent = "Комп’ютер виграв раунд!";
        rpsTextPole.style.color = "#900";
        computerPoints += 1;
      }
      break;
    case "paper":
      if (userChoice === "paper") {
        rpsTextPole.textContent = "Нічия";
        rpsTextPole.style.color = "#ffcc00";
      } else if (userChoice === "stone") {
        rpsTextPole.textContent = "Комп’ютер виграв раунд!";
        rpsTextPole.style.color = "#900";
        computerPoints += 1;
      } else if (userChoice === "scissors") {
        rpsTextPole.textContent = "Ви виграли раунд!";
        rpsTextPole.style.color = "#039900";
        userPoints += 1;
      }
      break;
    case "scissors":
      if (userChoice === "scissors") {
        rpsTextPole.textContent = "Нічия";
        rpsTextPole.style.color = "#ffcc00";
      } else if (userChoice === "paper") {
        rpsTextPole.textContent = "Комп’ютер виграв раунд!";
        rpsTextPole.style.color = "#900";
        computerPoints += 1;
      } else if (userChoice === "stone") {
        rpsTextPole.textContent = "Ви виграли раунд!";
        rpsTextPole.style.color = "#039900";
        userPoints += 1;
      }
      break;
  }

  userScore.textContent = `Ви - ${userPoints}`;
  computerScore.textContent = `Комп'ютер - ${computerPoints}`;

  userChoice = "";
});

UserRps();
