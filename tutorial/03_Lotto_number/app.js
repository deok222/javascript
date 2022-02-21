const numbers = document.querySelector(".numbers");
const start = document.querySelector(".strat");
const reset = document.querySelector(".reset");
const list = document.querySelector(".list");
const dimm = document.querySelector(".dimm");

let lottoNumbers = [];
let lottoList = [];
let count = 10;

function checkGame() {
  count--;
  if (count <= 0) {
    dimm.classList.add("active");
    snackBar();
  }
}

function snackBar() {
  const snackbar = new SnackBar();

  snackbar.make(
    "message",
    [
      // message
      "끝",

      // vertical position
      "bottom",

      // horizontal position
      "center",
    ],
    null
  );

  snackbar.action(function () {
    snackbar.close();
    dimm.classList.add("active");
    resetGame();
  });
}

function addList() {
  list.innerHTML = "";
  lottoList.push(lottoNumbers);

  lottoList.forEach((item) => {
    const p = document.createElement("p");
    item.forEach((num) => {
      const span = document.createElement("span");
      span.textContent = num;
      p.appendChild(span);
    });

    list.prepend(p);
  });
}

function paintNumer() {
  numbers.innerHTML = "";
  lottoNumbers.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerText = item;
    numbers.appendChild(div);
  });
}

function startGame() {
  lottoNumbers = [];
  while (lottoNumbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;

    if (lottoNumbers.indexOf(num) === -1) {
      lottoNumbers.push(num);
    }
  }
  paintNumer();
  addList();
  checkGame();
}

function resetGame() {
  count = 10;
  lottoNumbers = [];
  lottoList = [];
  list.innerHTML = "";
  while (lottoNumbers.length < 6) {
    lottoNumbers.push("?");
  }
  console.log(lottoNumbers);
  paintNumer();
}

function init() {
  start.addEventListener("click", startGame);
  reset.addEventListener("click", resetGame);
}

init();
