/*
    javascript code
    let num=30;
    console.log(num);
    let num1=10*10;
    console.log(num1);
    console.log(typeof num1);
    let num2=10+"안녕하세요";
    console.log(num2);
    console.log(typeof num2);
*/

// var, let, const
let name, age, nextAge, message;

// 사전적 의미: var, let, const는 변수를 선언함에 있어서 필요한 예약어다 (규칙이다)

// var: 재선언, 재할당 가능
// let: 재할당만 가능
// const: 둘 다 불가능

console.log(a);
var a = 1; // 선언

console.log("Name");
name="YuJunSang";
age=30;
console.log(name);
console.log("Age");
console.log(age);
console.log(typeof name, typeof age);

nextAge=age+1;
message="내년 나이는 "+nextAge+"살입니다 :("
console.log(message);

age=28;
message="만 나이는 "+age+" 살입니다 :)"
console.log(message);

// MochaScript => LiveScript => Javascript