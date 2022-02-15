// variable = 변수
// const, var, let
// scope 블럭 {}안에서만 유효하다.

// const firstName
// firstName = "123";
//아래처럼 줄여서 사용할 수 있다.

// 1. var - 블럭을 무시하는 속성이 있음.
{
  var age = 30;
  age = 50;
}
console.log(age);

// 2. let - 읽기, 쓰기 모두 가능
{
  let title = "html";
  console.log(title);

  title = "CSS";
  console.log(title);
}

// 3. const - 상수 -.읽기만 가능, 변하지 않는다.
{
  const sub = "java";
  console.log(sub);

  // sub = "javascript";
  // console.log(sub);
}

// 4. 변수의 데이터 종류
// 원시데이터
// Object: 싱글데이터를 묶어놓은 데이터
// function: 일급객체

// 4-1. number
{
  const num = 10;
  const width = 20.5;
  console.log(num, width);

  const a = 1 / 0;
  const b = -25 / 0;
  const c = "html" / 0;

  console.log(a);
  console.log(b);
  console.log(c);
}

// 4-2. string
const firstName = "Jonh";
const lastName = "Snow";
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// 4-3. null
const fall = null;
console.log(`${fall}이고, 타입은 ${typeof fall}입니다.`);

// 4-4. undefined
let winter;
console.log(winter);

// 4-5 boolean
let abc = 100 > 50;
let bbb = 10 < 5;
console.log(abc);
console.log(bbb);

// 5. 동접타입 - 자바스크립트는 런타임(브라우저에서 실행될 때) 상태에서 타입이 결정된다.
let word = "winter";
console.log(`값은 ${word}이고, 타입은 ${typeof word}`);
word = 100;
console.log(`값은 ${word}이고, 타입은 ${typeof word}`);
