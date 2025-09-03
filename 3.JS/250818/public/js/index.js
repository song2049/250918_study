// 함수 선언식

// [함수예약어] [함수이름]([매개변수]) { [실행할 코드] }
// sayHello();

function sayHello() {
    function sayHello2() {
        console.log("hello2");
    }
    function sayHello3() {
        console.log("hello3");
    }
    sayHello3();
    sayHello2();
    console.log("hello");
}

// 평가와 실행 => 실행 컨텍스트
// 사실....이건 되게 쉽게 설명한겁니다.
const a = "a";

const sayHello = function() {
    console.log("sayhello");
}

sayHello();

// var sayHello = function() {
//     console.log("sayHello");
// }

// 메모리 힙: 데이터를 저장하는 큰 창고 같은 공간
// 콜 스택: 지금 "무슨 작업을 하고 있는지" 기록하는 실행 흐름 노트

// 함수는 값이여