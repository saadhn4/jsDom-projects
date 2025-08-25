// DOM Elements

const addBtnEl = document.querySelector(".js-add-btn");

const scores = [0, 0];
let activePlayer = 0;

document.querySelector(".player-0").classList.add("player-active");

addBtnEl.addEventListener("click", () => {
  // Incrementing 5 to active player's score with each click
  scores[activePlayer] += 5;

  // Updating the score of the active player in the DOM
  document.querySelector(`.player-${activePlayer}-score`).textContent =
    scores[activePlayer];

  // Removing player-active class before switching the active player
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove("player-active");

  // Changing the active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Assigning player-active class to the active player
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.add("player-active");
});
