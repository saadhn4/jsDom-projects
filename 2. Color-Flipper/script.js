const colors = [
  "#BFDBFE",
  "#111827",
  "#06B6D4",
  "#81B29A",
  "#006D77",
  "#F59E0B",
  "#E07A5F",
  "#5A189A",
  "#10B981",
  "#9D0208",
  "#3D348B",
  "#F2CC8F",
  "#374151",
];

let clicked = false;

function generateRandomColor(arr) {
  const color = arr[Math.trunc(Math.random() * arr.length)];
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("body").style.color = "#ffffff";
  clicked = true;
  document.querySelector(".flip-btn").innerHTML = "🔁";
}

document.querySelector(".flip-btn").addEventListener("click", () => {
  generateRandomColor(colors);
});
