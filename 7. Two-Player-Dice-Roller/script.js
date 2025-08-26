// DOM Elements

const rollDiceEl = document.querySelector(".js-roll-dice");
const newGameEl = document.querySelector(".js-new-game");
const msgEl = document.querySelector(".js-msg");
const diceImgEl = document.querySelector(".js-dice-img");

let scores, activePlayer, isPlaying;

function init() {
  scores = [0, 0];
  activePlayer = 0;
  isPlaying = true;
  msgEl.textContent = "Start Rolling!";
  document.querySelector(`.player-0-score`).textContent = 0;
  document.querySelector(`.player-1-score`).textContent = 0;

  document.querySelector(".player-0-card").classList.remove("bg-black");
  document.querySelector(".player-0-card").classList.remove("text-yellow-400");
  document.querySelector(".player-0-card").classList.remove("font-bold");
  document.querySelector(".player-0-card").classList.add("bg-white");

  document.querySelector(".player-1-card").classList.remove("bg-black");
  document.querySelector(".player-1-card").classList.remove("text-yellow-400");
  document.querySelector(".player-1-card").classList.remove("font-bold");
  document.querySelector(".player-1-card").classList.add("bg-white");

  document.querySelector(`.player-1-card`).classList.remove("border-3");
  document.querySelector(`.player-1-card`).classList.remove("border-black");

  document.querySelector(`.player-0-card`).classList.add("border-3");
  document.querySelector(`.player-0-card`).classList.add("border-black");
}
init();

// Generate random dice value
function generateDiceValue() {
  return Math.trunc(Math.random() * 6) + 1;
}

rollDiceEl.addEventListener("click", () => {
  if (isPlaying) {
    // Continously add dice value to active player's score
    let diceValue = generateDiceValue();
    scores[activePlayer] += diceValue;
    document.querySelector(`.player-${activePlayer}-score`).textContent =
      scores[activePlayer];
    // Updating message element
    msgEl.textContent = `Player ${activePlayer + 1} rolled`;
    diceImgEl.classList.remove("hidden");
    diceImgEl.src = `img/dice-${diceValue}.png`;

    // Check for winning condition; if not - switch player
    if (scores[activePlayer] >= 20) {
      msgEl.textContent = `Player ${activePlayer + 1} wins! 🏆`;
      diceImgEl.classList.add("hidden");

      // set playing to false so logic no longer works
      isPlaying = false;
      // Remove active-player classes
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("border-3");
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("border-black");
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("bg-white");
      // Add winning player classes
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.add("bg-black");
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.add("text-yellow-400");
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.add("font-bold");
    } else {
      // Remove active-player classes

      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("border-3");
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.remove("border-black");

      // Switching player logic
      activePlayer = activePlayer === 0 ? 1 : 0;

      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.add("border-3");
      document
        .querySelector(`.player-${activePlayer}-card`)
        .classList.add("border-black");
    }
  }
});

newGameEl.addEventListener("click", init);
