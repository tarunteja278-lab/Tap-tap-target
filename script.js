let score = 0;
let time = 30;

const target = document.getElementById("target");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const gameArea = document.getElementById("gameArea");

target.addEventListener("click", function () {
  score++;
  scoreText.textContent = score;
  moveTarget();
});

function moveTarget() {
  const maxX = gameArea.clientWidth - target.offsetWidth;
  const maxY = gameArea.clientHeight - target.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  target.style.left = x + "px";
  target.style.top = y + "px";
}

moveTarget();

const timer = setInterval(function () {
  time--;
  timeText.textContent = time;

  if (time <= 0) {
    clearInterval(timer);
    target.disabled = true;
    alert("Game Over! Your score is " + score);
  }
}, 1000);
