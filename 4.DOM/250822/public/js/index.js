// BOM: 브라우저가 기본적으로 제공하는 기능들을 자바스크립트로 조작할 수 있게 해주는 모델
// 브라우저 닫기, 새로고침 등등
// DOM: HTML을 객체로 바꿔서 자바스크립트로 조작 가능하게 만드는 모델

// `get`

// const firstChild = document.getElementById("first-child");

// firstChild.innerHTML = "모집중인 강좌";

// const secondChild = firstChild;

// secondChild.innerHTML = "모집중인 강의";

// console.log(firstChild);

// innerHTML: 해당 태그 안쪽의 HTML
// 쉽게: 태그에 들어있는 콘텐츠 내용을 가져오거나, 할당해서 내용을 변경할 수 있다.

// querySelector: CSS 선택자 문법으로 요소를 선택하는 방법 중 하나
// 질문하다 또는 요청하다
// 즉, 원하는 조건에 맞는 요소를 요청해서 달라

// const firstLi = document.querySelector(".header-nav > ul > li:nth-child(1)");
const liArray = document.querySelector(".header-nav > ul");

// console.log(typeof liArray);


// for(let i = 0; i < liArray.length; i++) {
//     liArray[i].innerHTML = "준비 중";
// }

// const array1 = [1, 2];

// liArray.map((value, index) => {
//     console.log(value);  
// })

const newLi = document.createElement("li");
newLi.innerHTML = "예정중인 과정";
newLi.className = "new";

liArray.appendChild(newLi);