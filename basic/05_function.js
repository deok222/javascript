// 1. function -> 함수(메서드)
// 함수 선언과 호출

// 함수 선언 , function은 카멜케이스로 써야 한다.

function myName() {
  console.log("hello");
}
// 아래와 똑같은 기능. 다른 코드 why?

// const myName = function () {};

//간단하게 나타내면 아래와 같음 '=> = funtion'
// const myName = () => {};

//호출
myName();

// 매개변수
function printMessage(message) {
  console.log(message);
}

printMessage("ㅎㅎㅎ");
printMessage("ㅋㅋㅋ");

// 기본 parameter
function showInfo(title, name = "스티브잡스") {
  console.log(`${title} by ${name}`);
}

showInfo("게르니카", "피카소");
showInfo("풍경");

// rest parameter / spread 연산자
function printAll(...items) {
  //   for (let i = 0; i < items.length; i++) {
  //     console.log(items[i]);
  //   }

  for (const item of items) {
    console.log(item);
  }
}

printAll("봄", "여름", "가을", "겨울", "ㅎㅇ");

// Scope
let movie = "kkkkkk"; //global 변수 (전역변수)

function printMovie() {
  let myMovie = "생활의 발견"; //local 변수 (지역변수)
  console.log(myMovie);
  console.log(movie);
}

printMovie();
//console.log(myMovie);

// 리턴 Return
function plus(a, b) {
  return a + b;
}
// 리턴은 코드가 끝날 때 쓴다. why? 리턴 후에 나오는 코드들은 읽히지 않음.

const sum = plus(5, 10);
console.log(sum);

// Arrow function
// function add (c, d) {} 아래들과 같은 기능의 코드
// const add = function (c, d) {
//   return c + d;
// };

const add = (c, d) => c + d;

const total = add(5, 8);
console.log(total);

function printHello() {
  console.log("안녕하세요");
  console.log(this);
}

printHello();
