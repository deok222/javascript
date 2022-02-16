// Array 배열

const arr1 = new Array();
const arr2 = [1, 3, 5, 7, 9];
const arr3 = ["no", "noo", "nooo", "noooo"];
const arr4 = [
  "hello",
  { model: "apple", price: 1000 },
  { model: "galaxy", price: 2000 },
];

console.log(arr4);
console.log(arr4[1].model);
console.log(arr2[1].model);

// 2. 배열 출력
const books = ["html", "css", "javascript"];

console.log(books);
console.log(books.length);
console.log(books[0]);
// 배열의 가장 첫번쨰 요소를 출력하는 코드
console.log(books[books.length - 1]);
// 배열의 가장 마지막 요소를 출력하는 코드

// 3. loop 출력
// for(초기화변수; 조건식; 증감식) {}
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

// 위와 같은 기능의 코드
for (let item of books) {
  console.log(item + "hello");
}

// forEach문
books.forEach((item) => {
  console.log(item);
});

// 4. 추가 삭제
// 요소의 뒤쪽에 추가
books.push("jquery");
console.log(books);

books.push("view");
console.log(books);

// 요소의 앞쪽에 추가
books.unshift("react");
console.log(books);

// 뒷 요소를 삭제
books.pop();
console.log(books);

// 앞 요소를 삭제
books.shift();
console.log(books);

// splice 지정한 위치에서 삭제 추가
books.splice(2, 1, "react", "view");
// 앞쪽 숫자 : 삭제할 요소의 위치 / 뒷쪽 문자 : 삭제한 위치에 추가할 요소
console.log(books);

// 두가지 배열을 합치기
const books2 = ["git", "nodejs"];
const newBooks = books.concat(books2);
// concat => 합치기 코드
console.log(newBooks);

// 검색
console.log(books.indexOf("veiw"));
// indexOf => 검색해주는 코드
console.log(newBooks.includes("css"));
// includes => 해당 요소가 포함되어 있는지 여부를 확인하는 코드
