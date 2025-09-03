// addEventListener 내부 동작 원리

// 콜백 함수

// function say(callback) {
//     // 특정 로직이 있고 처리함
//     // 처리 한 후 callback함수를 실행
//     console.log(callback());
// }
// function say2() {
//     return "안녕하세요 교수님!"
// }

// say(say2);

function addEventListener(type, callback) {
    if(type === "click") {
        callback();
    }
}

addEventListener("click", createStudent);

// 이벤트 등록 => 콜백 함수를 브라우저에게 전달하는 것.