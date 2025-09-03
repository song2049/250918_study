// function say () {
//     return "say"
// }
// function say () {
//     return "say2"
// }

// console.log(say());

// // 0xA1

const sungyoungHTML = "100"
const sungyoungCSS = "100"
const sungyoungJS = "100"

// ECMAScript에서 명시하는 객체의 사전적 의미: 객체는 속성들의 집합이다. 속성이란 키와 값의 연결이다.

const sungyoung = {
    subject: {
        html: 100,
        css: 100,
        js: 100
    },
    "Content-Type": "test/javascript"
}

// 점 표기법이라고 합니다.
console.log(sungyoung.subject.html);
console.log(sungyoung.subject.css);
console.log(sungyoung.subject.js);

// [객체].[속성이름] = [속성값];
// 속성이름 = key
// 속성값 = value
// key-value 쌍
sungyoung.html = 120;
sungyoung.write = "always";
sungyoung["Content-type"] = 'text/javascript';
sungyoung.hobby = "exercise"

delete sungyoung.html;

console.log("hobby" in sungyoung);

/*
    성영님`의` html은 100이다.
    성영님`의` css는 100이다.
    성영님`의` js는 100이다.

    {
        html: 100,
        css: 100,
        js: 100
    }
*/

/*
    [예약어] [변수이름] = [{
        [속성이름]: [값]
    }]
*/

// ES5 문법
// const sungyoung2 = new Object();