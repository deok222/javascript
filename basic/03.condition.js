// 1. 조건 연산
// if, else if, else

const age = 10;
if (age >= 20) {
  console.log("성인입니다.");
} else {
  console.log("돌아가세요.");
}

const month = 9;

if (month >= 3 && month <= 5) {
  console.log("spring");
} else if (month >= 3 && month <= 8) {
  console.log("summer");
} else if (month >= 6 && month <= 11) {
  console.log("auturm");
} else {
  console.log("winter");
}

// 2. 삼항 조건 연산자
// 조건 a 가 맞으면 값1 틀리면 값2 를 부여한다. => 조건 ? 값1 : 값2
const myAge = 18;
console.log(myAge >= 20 ? "성인" : "청소년");

// 3. switch문
const color = "red";

switch (color) {
  case "red":
    console.log("I like red");
    break;
  case "blue":
    console.log("I like blue");
    break;
  case "green":
    console.log("I like green");
    break;
  default:
    console.log("I dont know");
    break;
  // break => 일치하는 값을 찾을 경우 뒤의 값들은 무시하고 빠져나가게 해줌
}
