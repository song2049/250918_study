/*
    module : {
        모듈로서 내보낼 것들을 속성과 값으로 정의한다.
        exports: {
        
        }
    }
*/
// const add = () => {} 이렇게 할 수도 아래처럼 할수도 있음

console.log("나 add.js인데, 진짜 평가와 실행이 됨?");

// module.exports.add = (a, b) => {
//     return a + b
// }

// module.exports.a = 1;
// module.exports.b = "안녕하세요";

module.exports = {
    add: (a, b) => {
        return a + b
    },
    a: 1,
    b: "안녕하세요",
    c: 1,
    d: 2,
    Comments: {
        userId: "song2049"
    }
}