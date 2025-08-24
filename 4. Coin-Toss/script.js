const btnEl = document.querySelector(".flip-btn ");
const resultEl = document.querySelector(".roll-result");
const coinEl = document.querySelector(".coin-img");

const outcomes = ["heads", "tails"];

function generateResult(arr) {
  const result = arr[Math.trunc(Math.random() * outcomes.length)];
  return result;
}

let outcome = generateResult(outcomes);

btnEl.addEventListener("click", () => {
  coinEl.src = `./${outcome}.png`;
  coinEl.classList.remove("hidden");
  resultEl.textContent = outcome;
  outcome = generateResult(outcomes);
});
