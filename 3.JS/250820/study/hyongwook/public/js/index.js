
//오름차순
const numbers = [22, 55, 66, 11, 44, 22];
console.log (`초기값: ${numbers}`);

let valid = true;    
for (let i = 0; i < numbers.length; i++) {
    let v1 = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
        let v2 = numbers[j];
        if (v1 > v2){ //좌 값이 우 값보다 클 경우 (오름차순)
            numbers[i] = v2; //작은 값을 앞으로
            numbers[j] = v1;
            // console.log(`${i},${j} : ${numbers}`);
            valid = false;
            break;
        }
    }
    if (valid) break;
}

console.log (`출력: ${numbers}`);