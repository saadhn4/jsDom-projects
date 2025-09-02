// DOM Elements
const rollBtnEl = document.querySelector(".btn--roll");
const holdBtnEl = document.querySelector(".btn--hold");
const newBtnEl = document.querySelector(".btn--new");

let scores, activePlayer, currentScore, isPlaying;

function init() {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  isPlaying = true;

  document.getElementById(`current--0`).textContent = 0;

  document.getElementById(`current--1`).textContent = 0;

  document.querySelector(".player--1").classList.remove("player--active");

  document.querySelector(".player--0").classList.add("player--active");

  document.querySelector(".player--0").classList.remove("player--winner");

  document.querySelector(".player--1").classList.remove("player--winner");

  document.getElementById(`score--0`).textContent = 0;

  document.getElementById(`score--1`).textContent = 0;
}

init();

function generateDiceValue() {
  return Math.trunc(Math.random() * 6) + 1;
}

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
}

rollBtnEl.addEventListener("click", () => {
  if (isPlaying) {
    let diceValue = generateDiceValue();
    console.log(diceValue);
    if (diceValue !== 1) {
      currentScore += diceValue;
      console.log(currentScore);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      scores[activePlayer] = 0;
      switchPlayer();
    }
  }
});

holdBtnEl.addEventListener("click", () => {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }
});

newBtnEl.addEventListener("click", init);
