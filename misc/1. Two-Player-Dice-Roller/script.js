const rollBtnEl = document.querySelector(".js-roll-btn");

const newGameBtnEl = document.querySelector(".js-new-btn");

const diceResultEl = document.querySelector(".dice-result");

let scores = [0, 0];
let activePlayer = 0;
let playing = true;

function generateDiceValue() {
  return Math.trunc(Math.random() * 6) + 1;
}

rollBtnEl.addEventListener("click", () => {
  if (playing) {
    let diceValue = generateDiceValue();
    scores[activePlayer] += diceValue;
    document.querySelector(`.player-${activePlayer}-score`).textContent =
      scores[activePlayer];

    diceResultEl.textContent = `Player ${activePlayer + 1} rolled ${diceValue}`;

    if (scores[activePlayer] >= 30) {
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      diceResultEl.textContent = `Player ${activePlayer + 1} wins!`;
      playing = false;
    } else {
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-active");
    }
  }
});

newGameBtnEl.addEventListener("click", () => {
  scores = [0, 0];
  document.querySelector(`.player-0-score`).textContent = 0;
  document.querySelector(`.player-1-score`).textContent = 0;
  activePlayer = 0;
  diceResultEl.textContent = "Roll a dice to start !";
  playing = true;
  document.querySelector(".player-0").classList.toggle = "player-active";
  document.querySelector(".player-1").classList.toggle = "player-active";
});
