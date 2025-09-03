function sayHi() {
    console.log("안녕하세요");
}

function studyHour() {
    console.log("저는 5시간 공부합니다");
}

const submit = document.querySelector("#submit");

submit.onclick = sayHi;
submit.onclick = studyHour;