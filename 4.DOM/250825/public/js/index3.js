/*
    요구 사항

    1. li를 클릭했을 때는 빨간색
    2. li에 커서를 올렸을 때는 노란색
    3. header-nav를 눌렀을 때 전체 배경색 aqua
*/

const liArray = document.querySelectorAll(".header-nav > ul > li");
const headerNav = document.querySelector(".header-nav");

headerNav.addEventListener("click", function() {
    headerNav.className = "active-header-nav"
})

function handlePaintClick(event) {
    event.stopPropagation();
    event.currentTarget.className = "active-click";
    event.target.style.backgroundColor = "blue";
}
 
function handlePaintMouseOver(event) {
    event.currentTarget.className = "active-mouseover";
}

function handlePaintMouseOut(event) {
    event.currentTarget.className = "active-mouseout";
}

for(let i = 0; i < liArray.length; i++) {
    liArray[i].addEventListener("click", handlePaintClick);
    liArray[i].addEventListener("mouseover", handlePaintMouseOver);
    liArray[i].addEventListener("mouseout", handlePaintMouseOut);
}

/*
    브라우저가 이벤트를 적용하는 순서

    1. target을 명확하게 찾을려고 하는 행위 => 캡처링 
    => document => html => body => header => header-nav => ul => li
    2. target을 찾음. 이벤트 적용함.
    3. 다시 document로 올라감. 이 때, 이벤트가 등록이 되어있는지 확인함
    => 사용자가 행동한 이벤트가 맞는 걸 찾으면 이벤트 적용함 => 버블링
    => li => ul => header-nav => header => body => html => document

    이벤트 객체

    누가 눌렀는지, 어떤 요소였는지, 마우스 좌표는 어땠는지
    그러한 정보 => `객체`를 함수에 던져줘야 함.
    => 브라우저가 자동으로 넣어주는 특별한 객체
*/