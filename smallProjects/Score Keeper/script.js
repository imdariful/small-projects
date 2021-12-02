// !Object of p1
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
// !Object of p2
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};
// !Declaring variable defaults
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

// !Update score function
function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

// !Setting playto
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

// !Player 1 update score
p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});
// !Player 2 update score
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

// !Reset game
resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
