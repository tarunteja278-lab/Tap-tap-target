let score = 0;
let time = 30;
let gameRunning = false;
let timer;

const target = document.getElementById("target");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const bestText = document.getElementById("best");
const gameArea = document.getElementById("gameArea");
const startButton = document.getElementById("startButton");

let bestScore = localStorage.getItem("bestScore") || 0;
bestText.textContent = bestScore;

function moveTarget() {
  const maxX = gameArea.clientWidth - target.offsetWidth;
  const maxY = gameArea.clientHeight - target.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  target.style.left = x + "px";
  target.style.top = y + "px";
}

function startGame() {
  score = 0;
  time = 30;
  gameRunning = true;

  scoreText.textContent = score;
  timeText.textContent = time;

  target.style.display = "block";
  startButton.textContent = "🔄 Restart Game";

  moveTarget();

  clearInterval(timer);

  timer = setInterval(function () {
    time--;
    timeText.textContent = time;

    if (time <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  gameRunning = false;
  clearInterval(timer);

  target.style.display = "none";

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
    bestText.textContent = bestScore;
  }

  alert("🎉 Game Over!\nYour score: " + score);
}

target.addEventListener("click", function () {
  if (!gameRunning) return;

  score++;
  scoreText.textContent = score;

  moveTarget();
});

startButton.addEventListener("click", startGame);
