let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

const checkBtnEl = document.querySelector(".js-check-btn");

const inputEl = document.querySelector(".js-guess-input");

let msgEl = document.querySelector(".js-message");

const boxEl = document.querySelector(".secret-box");

const scoreEl = document.querySelector(".score-value");

const highScoreEl = document.querySelector(".high-score-value");

const resetBtn = document.querySelector(".js-reset-btn");

checkBtnEl.addEventListener("click", () => {
  const inputValue = Number(inputEl.value);

  if (!inputValue) {
    msgEl.textContent = "Enter a valid number pls!";
    msgEl.style.color = "red";
  }

  if (inputValue === secretNumber) {
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
    boxEl.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    msgEl.textContent = "You guessed right!";
    inputEl.value = "";
  } else {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      msgEl.textContent = inputValue > secretNumber ? "Too high!" : "Too Low!";
      inputEl.value = "";
    } else {
      msgEl.textContent = "Game over :(";
      scoreEl.textContent = 0;
    }
  }
});

resetBtn.addEventListener("click", () => {
  score = 20;
  scoreEl.textContent = score;
  msgEl.textContent = "Start guessing...";
  boxEl.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#333";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
