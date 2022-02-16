const books = ["html", "css", "javascript"];

// 1. 배열을 문자열로 만드는 방법
console.log(books);
{
  const result = books.join();
  //   join => 문자열로 변환시켜주는 코드 / join 안에 / - 등 넣어주는 기호가 삽입됌
  console.log(result);
}

// 2. 문자열을 배열로 만드는 방법
{
  const book2 = "react, vue, angular";
  const result = book2.split(",");
  //   split => 배열로 변환시켜주는 코드 / split 안에 넣어주는 기호가 삽입됌
  console.log(result);
}

// 3.배열을 반대로 만드는 방법
{
  const numbers = [1, 3, 5, 7, 9];
  console.log(numbers);
  const result = numbers.reverse();
  console.log(result);
}

// 4. 특정한 요소를 제거한 새로운 배열 만드는 방법
{
  const numbers = [1, 2, 5, 7, 9];
  console.log(numbers);
  const result = numbers.splice(2);
  console.log(result);
}

console.clear();

// 소주
const sojus = [
  { name: "대선", price: 1200, sale: true, score: 86 },
  { name: "좋은데이", price: 1100, sale: false, score: 92 },
  { name: "진로", price: 1150, sale: true, score: 80 },
  { name: "금복주", price: 960, sale: false, score: 60 },
  { name: "참이슬", price: 1250, sale: true, score: 46 },
];

// 5. score가 80인 소주 찾기
{
  const result = sojus.find((item) => item.score === 80);
  console.log(result.name);
}

// 6. 판매중인 소주 찾아서 새로운 배열 만들기
{
  const result = sojus.filter((item) => item.sale);
  console.log(result);
}
//  7. 점수(score)만 있는 새로운 배열 만들기
{
  const result = sojus.map((item) => item.name);
  console.log(result);
}

// 8. 특정 점수에 미달하는 것이 있는지 찾기
{
  const result = sojus.some((item) => item.score < 50);
  console.log(result);
}

// class / 콜백함수 / 프라미스 함수 ====> 공부하면 좋다.
