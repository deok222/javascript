const numbers = document.querySelector(".numbers");
const start = document.querySelector(".strat");
const reset = document.querySelector(".reset");

const list = document.querySelector(".list");
let lottoNumbers = [];
let lottoList = [];

function addList() {
  list.innerHTML = "";
  lottoList.push(lottoNumbers);

  lottoList.forEach((item) => {
    const p = document.createElement("p");
    p.innerText = item;
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
    lottoNumbers.push(num);
  }
  paintNumer();
  addList();
}

function resetGame() {
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