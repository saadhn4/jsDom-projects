/*
Roll dice → add to total score.

Roll a 1 → lose turn, no score.

First to 30 wins.
*/

// DOM elements
const rollDiceEl = document.querySelector(".js-roll-dice-btn");

const newGameEl = document.querySelector(".js-new-game-btn");

const msgEl = document.querySelector(".js-msg");

// Initial values
let scores, activePlayer, isPlaying;

function init() {
  scores = [0, 0];
  activePlayer = 0;
  isPlaying = true;

  msgEl.textContent = "Start rolling..";
  document.querySelector(`.player-0-score`).textContent = 0;
  document.querySelector(`.player-1-score`).textContent = 0;

  document.querySelector(`.player-0-card`).classList.remove("bg-green-400");
  document.querySelector(`.player-0-card`).classList.remove("font-bold");

  document.querySelector(`.player-1-card`).classList.remove("bg-green-400");
  document.querySelector(`.player-1-card`).classList.remove("font-bold");

  document.querySelector(`.player-0-card`).classList.add("bg-white");
  document.querySelector(`.player-1-card`).classList.add("bg-white");

  document.querySelector(`.player-0-card`).classList.add("border-5");
  document.querySelector(`.player-0-card`).classList.add("border-red-500");
}

init();

// Function to generate dice value between 1-6
function generateDiceValue() {
  return Math.trunc(Math.random() * 6) + 1;
}

// Switch player functionality
function switchPlayer() {
  // Removing active-player classes (red border)
  document
    .querySelector(`.player-${activePlayer}-card`)
    .classList.remove("border-5");
  document
    .querySelector(`.player-${activePlayer}-card`)
    .classList.remove("border-red-500");

  // Player swiching logic
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Adding active player classes to newly switched player
  document
    .querySelector(`.player-${activePlayer}-card`)
    .classList.add("border-5");
  document
    .querySelector(`.player-${activePlayer}-card`)
    .classList.add("border-red-500");
}

rollDiceEl.addEventListener("click", () => {
  if (isPlaying) {
    let diceValue = generateDiceValue();

    // Returning immediately if dice rolls 1, if we dont, itll switch back to the 1st player which we dont want
    if (diceValue === 1) {
      msgEl.textContent = `Player ${activePlayer + 1} rolled 1`;
      switchPlayer();
      return;
    }

    scores[activePlayer] += diceValue;

    msgEl.textContent = `Player ${activePlayer + 1} rolled ${diceValue}`;

    document.querySelector(`.player-${activePlayer}-score`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 30) {
      isPlaying = false;
      // Removing active player classes from the winner
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("border-5");
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("border-red-500");

      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("bg-white");

      // Adding winner player classes
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.add("bg-green-400");

      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.add("font-bold");

      msgEl.textContent = `🏆 Player ${activePlayer + 1} wins!`;
    } else {
      switchPlayer();
    }
  }
});

newGameEl.addEventListener("click", init);
