// 오브젝트 -> 자바스크립트의 상태와 행동을 가지는 데이터
// ex) 휴대폰의 상태(properties) -> color, size
//     휴대폰의 기능(행동 methods) -> 벨소리, 카메라, 음악재생
// 형식 {키: 값}

const user = {
  fullName: "DeokGiPark",
  age: 29,
  email: "alaseomohage",
  works: [
    { id: 1, title: "ggabno", price: 100000000, like: 10000 },
    { id: 2, title: "ggabnono", price: 1000000000, like: 100000 },
    { id: 3, title: "ggabnonono", price: 10000000000, like: 1000000 },
  ],
  //   login: function() {
  //       console.log('어서와 임망')
  //   } 아래와 같은 코드 / 아래가 더 간단

  login() {
    console.log("어서와 임망");
  },

  logout() {
    console.log("잘가 임망");
  },
  goodWorks() {
    console.log("피카소의 대표작");
    this.works.forEach((work) => {
      console.log(
        `${work.id}, ${work.title}, ${work.price}원, 좋아요(${work.like})`
      );
    });
  },
};

console.log(user.age);
console.log(user.fullName);
console.log(user.login());
// console.log(user.@ -> @ 가져오고 싶은 정보);
user.login();
user.logout();
user.goodWorks();

console.log(user.age);
user.age = 45;

console.clear();

// Math object
console.log(Math);
console.log(Math.PI);

const sum = 9.7;
console.log(Math.round(sum));
console.log(Math.floor(sum));
console.log(Math.ceil(sum));
console.log(parseInt(sum));
// round => 반올림 / parseInt -> 문자를 숫자로 변환시켜준다.

// random number
const num = Math.random();
console.log(num);

// 0~9까지의 숫자를 정수출력으로 랜덤하게
console.log(Math.floor(Math.random() * 10));
// 0~10까지의 숫자를 정수출력으로 랜덤하게
console.log(Math.floor(Math.random() * 10) + 1);

// 배열을 랜덤하게 출력
const food = ["라면", "떡볶이", "짬뽕", "국밥"];
const randomNum = Math.floor(Math.floor(Math.random() * food.length));
console.log(food[randomNum]);
