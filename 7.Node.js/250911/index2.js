// 모듈

/*
    Node.js에서 가장 기본 단위는 파일 하나에요.
    그리고 그 파일 하나를 우리는 모듈이라고 부릅니다.

    node index.js

    위처럼 index.js 하나를 실행시키면
    이건 곧 하나의 모듈이 독립된 프로그램처럼 작동하는 것.

    하나의 파일은 하나의 역할을 가져야하며
    다른 파일과 연결될 땐 명확하게 require()로 가져와야 한다.
    => 모듈화

    프로그램: 
    프로세스: 
    스레드: 
*/

const add = require("./add.js");
const minus = require("./minus.js");
const fs = require("fs");

const data = fs.readFileSync("sample.txt", "utf-8");

console.log(data);

console.log(add(1, 2));
console.log(minus(2, 1));

// Node.js의 내부 구조
// fs => file System의 약자
// => Node.js에서 파일을 읽고 쓰고 수정하고 삭제할 수 있게 해주는 모듈


