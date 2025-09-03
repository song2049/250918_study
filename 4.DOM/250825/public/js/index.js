const liArray = document.querySelectorAll(".header-nav > ul > li");

// liArray[1].innerHTML

// liArray[0].onclick = function() {
//     console.log("클릭 되었음!");
// }

function createStudent() {
    console.log("학생 등록되었음!");
}

function renderStudent() {
    console.log("학생들을 요소에 꽂아넣어줌!");
}

// liArray[0].onclick = createStudent;
// liArray[0].onclick = renderStudent;

// liArray[0].addEventListener([이벤트종류], [콜백함수])
liArray[0].addEventListener("click", createStudent);
liArray[0].addEventListener("click", renderStudent);