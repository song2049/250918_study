/*
    함수 => function
    
    사전적 의미: 하나의 특별한 목적의 작업을 수행하도록 설계된 
    독립적인 블록

    쉽게: 기능이다. 우리가 원할 때 `호출`해서 사용할 수 있도록
    `선언`한다.

    선언: function [함수이름]([매개변수]) {[코드실행]}

    호출: [함수이름]([인수])

    선언과 호출이 있어야지만 비로소 함수라고 부를 수 있다.
    ES5문법

    평가와 실행

    var: 언디파인드
    let: 언이니셜라이즈드
    const: 언이니셜라이즈드
*/

// console.log(a);
// let a = 1;

const firstNumber = Number(prompt("첫 번째 숫자를 넣어주세요"));
const secondNumber = Number(prompt("두 번째 숫자를 넣어주세요"));

function add(firstNumber, secondNumber) {
    /*
        let firstNumber = 내가첫번째로넣은값;
        let secondNumber = 내가두번째로넣은값;
    */
    console.log(firstNumber + secondNumber);
    return firstNumber + secondNumber;
}

const result = add(firstNumber, secondNumber);

console.log(result);
