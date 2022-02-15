// 1. 문자열 연결 연산자
console.log("Winter" + " is" + " comming");
console.log(typeof ("10" + 2));

console.log("Winter is comming");

const say1 = "winter";
const say2 = "is comming";
console.log(`${say1} ${say2}`);

// 2. 산술 연산자
console.log(100 + 10);
console.log(100 - 10);
console.log(100 * 10);
console.log(100 / 10);
console.log(100 % 10);
console.log(100 ** 10);
// ** = 제곱근

// 3. 증감 연산자
let number = 8;
// const는 재선언이 불가능하기 때문에 사용하지 않음.
console.log(number);
number++;
console.log(number);
number--;
console.log(number);
number--;
number--;
console.log(number);

let num1 = 10;
let num2 = ++num1;
console.log(num1, num2);
// 앞 쪽에 ++가 붙으면 해당 속성 및 추가되는 속성의 값이 모두 영향을 받음

let count1 = 10;
let count2 = count1++;
console.log(count1, count2);
// 뒤쪽에 ++가 붙으면 기존의 속성값은 그대로 두고 그 후 다른속성값이 영향을 받음

// 4. 할당 연산자
let x = 10;
let y = 5;

x += y; // x = x + y; 동일한 의미이나 다른 코드기 때문에 알아볼 수 있어야 함.
console.log(x);

x = x - y; // x -= y
console.log(x);

x = x * y; // x *= y
console.log(x);

x = x % y; // x %= y
console.log(x);

// 5. 비교 연산자 (true, false)
console.log(1000 < 100);
console.log(1000 <= 100); // 부등호 순서 유의하기
console.log(1000 > 100); // 부등호 순서 유의하기
console.log(1000 >= 100); // 부등호 순서 유의하기

//console.clear(); ==> 콘솔창 정리
console.clear();
// 6. 논리 연산자
// ||(or) &&(and) !(not)

let a = 100 > 50; // true
let b = 10 < 5; // false
let c = true; // true
console.log(a, b, c);

// ||(or)는 하나라도 참이면 true
console.log(a || b || c);

// &&(and)는 전부 참일때만 true
console.log(a && b && c);

// !는 값을 반대로 변경한다.
b = !b;
console.log(a && b && c);

// 7. 동등, 일치 연산자
// ==, ===, !=, !==
const value1 = "100";
const value2 = 100;

// 동등 연산자 / 단순 데이터의 형태만 보고 판단
console.log(value1 == value2);
console.log(value1 != value2);

// 일치 연산자 / 데이터뿐만 아니라 타입까지 확인하여 판단 따라서 얘를 쓰는게 좋다.
console.log(value1 === value2);
console.log(value1 !== value2);

console.log("===========");
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);

console.log(null == false);
console.log(undefined == false);

console.log(null == undefined);
console.log(null === undefined);
console.log("===========");
