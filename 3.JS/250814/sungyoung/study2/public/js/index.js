let first = Number(prompt("첫"));
let second = Number(prompt("두"));
let plus = ""
// f = 5, s = 4
if(first > second) { 
    let temp = 0;

    temp = first;
    first = second;
    second = temp;
}

for(let i = first; i < second; i++) {
    if(i === second - 1) {
        plus = plus + `${i}`
        continue;
    }
    plus = plus + `${i},`  
}

console.log(`당신이 선택한 숫자는 ${plus} 입니다.`);


/*
    1,2,3,4,
*/