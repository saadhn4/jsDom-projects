const btnEl = document.querySelector(".roll-btn");
const diceEl = document.querySelector(".dice-img");
const diceResultEl = document.querySelector(".dice-rolled-value");

function generateDiceValue() {
  return Math.trunc(Math.random() * 6) + 1;
}

let diceValue = generateDiceValue();

// console.log(generateDiceValue());

btnEl.addEventListener("click", () => {
  diceEl.classList.remove("hidden");
  diceEl.src = `./img/dice-${diceValue}.png`;
  diceResultEl.textContent = diceValue;

  // If we dont reassign dice's value, it'll just show the first value it generated, wont generate anything else
  diceValue = generateDiceValue();
});
