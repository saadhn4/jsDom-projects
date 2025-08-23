let countValue = 0;

function updateCount() {
  document.querySelector(".count-value").textContent = countValue;
}

function increseCount() {
  countValue++;
  updateCount();
}

document.querySelector(".increase-btn").addEventListener("click", increseCount);

function decreaseCount() {
  if (countValue > 0) {
    countValue--;
    updateCount();
  }
}

document
  .querySelector(".decrease-btn")
  .addEventListener("click", decreaseCount);

function resetCount() {
  countValue = 0;
  updateCount();
}

document.querySelector(".reset-btn").addEventListener("click", resetCount);
