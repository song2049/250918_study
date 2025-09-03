// 연산자

/*
    연산자란?

    사전적 의미: 하나 이상의 값을 가지고, 어떤 계산이나 조작을 수행하는 기호
    쉽게: 값과 값을 연결해서 새로운 결과를 만들어내는 행위

    대표적으로 비교 연산자
*/

let teacher = 1000;
let junho = 1000;
const iceAme = 2000;
const megalicano = 3300;

teacher = teacher + junho;
junho = junho - junho;

console.log(teacher == iceAme);
// if() {}
console.log(junho);

// >, <
console.log(teacher > junho);
console.log(teacher < junho);

let big = "일하나";
let small = "작다"
console.log(big.length > small.length);

console.log(big.length);
console.log(small.length);

console.log("1" === 1);

// [if] [(조건)] [{코드}]
/*
    메가 커피

    아이스 아메리카노: 2000
    메가리카노: 3300
*/

// if(teacher === megalicano) {
//     console.log("메가리카노를 살 수 있음");
// } else {
//     console.log("그 외에 것들은 살 수 있음");
// }

if(teacher === megalicano) {
    console.log("메가리카노를 살 수 있음");
} else if(teacher === iceAme) {
    console.log("아메리카노는 살 수 있음");
} else if(teacher === Ade) {
    console.log("에이드는 살 수 있음");
}

// >==, >, <
// || => or
// && => AND
// console.log(3000 > "2000" && 2000 === "2000");
