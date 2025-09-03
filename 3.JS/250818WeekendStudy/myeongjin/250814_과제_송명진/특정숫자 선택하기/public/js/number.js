let firstNumber = Number(prompt("첫 번째 숫자(1~9)"));
let secondNumber = Number(prompt("두 번쨰 숫자(1~9)"));

let a = " "

if(firstNumber > secondNumber) {
    let temp
    temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
}

for(let i = firstNumber; i < secondNumber; i++) {
    if (i === secondNumber - 1 ) {
        a += `${i}`
        continue;
    }
    a += `${i},`
   
}
console.log(`당신이 고른 숫자는 ${a} 입니다.`);