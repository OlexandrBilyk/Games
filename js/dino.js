const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const dinoImg = new Image();
dinoImg.src = "./images/dino.png";
const cactusImg = new Image();
cactusImg.src = "./images/cactus.png";

let dino, cactus, gravity, speed, gameOver, animationFrame;

function initializeGame() {
  dino = { x: 50, y: 160, width: 50, height: 50, dy: 0, jumping: false };
  cactus = { x: 750, y: 160, width: 20, height: 40 };
  gravity = 1;
  speed = 5;
  gameOver = false;
  restartButton.style.display = "none";
  gameLoop();
}

function drawDino() {
  ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
}

function drawCactus() {
  ctx.drawImage(cactusImg, cactus.x, cactus.y, cactus.width, cactus.height);
}

function update() {
  if (gameOver) return;

  dino.y += dino.dy;
  dino.dy += gravity;

  if (dino.y >= 150) {
    dino.y = 150;
    dino.jumping = false;
  }

  cactus.x -= speed;
  if (cactus.x < -cactus.width) {
    cactus.x = 800;
  }

  if (
    dino.x < cactus.x + cactus.width &&
    dino.x + dino.width > cactus.x &&
    dino.y < cactus.y + cactus.height &&
    dino.y + dino.height > cactus.y
  ) {
    gameOver = true;
    restartButton.style.display = "block";
    cancelAnimationFrame(animationFrame);
  }
}

function jump() {
  if (!dino.jumping) {
    dino.dy = -15;
    dino.jumping = true;
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDino();
  drawCactus();
  update();
  animationFrame = requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") jump();
});

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  initializeGame();
});

restartButton.addEventListener("click", function () {
  initializeGame();
});
