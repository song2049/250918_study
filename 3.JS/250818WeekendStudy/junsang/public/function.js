let num_1=Number(prompt("첫 번째 숫자"));
let num_2=Number(prompt("두 번째 숫자"));

function getNumberRange(n1,n2){
    let result=[];
    let tmp;

    if (n1<n2){}
    else{
        tmp=n2;
        n2=n1;
        n1=tmp;}
    for (let i=n1;i<n2;i++) {
        result.push(i);}
    return result;
}
const numbers = getNumberRange(num_1, num_2);
console.log(`당신이 선택한 숫자는 ${numbers.join(",")} 입니다`);












/*
함수(function): 기능
원할 때 `호출`해서 사용할 수 있도록 `선언`한다.

선언: function[함수이름]([변수]){[코드]}
호출: [함수이름]([인수])
ES5문법

선언과 호출이 있어야 함수라고 부를 수 있음

평가와 실행단계

var a=1;
console.log(a);

hoisting과 밀접한 관련이 있음
var: undefined (자료형)
let, const: uninitialized (자료형X, 오류발생)

prompt() > 입력값은 항상 문자열
왜? javascript 설계 방식임. 설계 왜? 개발자 마음
return 반환값


const num_1=Number(prompt("첫번째 숫자"));
const num_2=Number(prompt("두번째 숫자"));

function add(num_1,num_2){
    
    let num_1=첫번째입력
    let num_2=두번째입력
    
   console.log(num_1+num_2);
   return num_1+num_2;
}
const result= add(num_1, num_2);
console.log(result);
*/

