const bgBtn = document.getElementById("bgBtn");
// const bgBtn = document.querySelector('#bgBtn') 1번과 동일, 선택자에 따라 #이 붙냐 안붙냐의 차이
const hexBtn = document.getElementById("hexBtn");
const color = document.querySelector(".color");

const bg = ["orange", "blue", "red", "black", "yellow", "green"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

//함수형
function getBgNum() {
  return Math.floor(Math.random() * bg.length); // 0 ~ 6 사이
}
function getHexNum() {
  return Math.floor(Math.random() * hex.length); // 0 ~ 15 사이
}

bgBtn.addEventListener("click", () => {
  const randomBgNumber = getBgNum();
  console.log(randomBgNumber);

  document.body.style.backgroundColor = bg[randomBgNumber];
  color.textContent = bg[randomBgNumber];
});

hexBtn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHexNumber = getHexNum();
    hexColor = hexColor + hex[randomHexNumber];
    console.log(hexColor);
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

//---------------위, 아래 동일 코드임

bgBtn.addEventListener("click", () => {
  const randomBgNumber = Math.floor(Math.random() * bg.length);
  console.log(randomBgNumber);

  document.body.style.backgroundColor = bg[randomBgNumber];
  color.textContent = bg[randomBgNumber];
});

hexBtn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHexNumber = Math.floor(Math.random() * hex.length);
    hexColor = hexColor + hex[randomHexNumber];
    console.log(hexColor);
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
