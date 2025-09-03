//오름차순
const numbers = [22, 55, 66, 11, 44, 22, 99, 85, 22];

for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] === numbers[j]) numbers.splice(j, 1);
        if(numbers[i] > numbers[j]) {
            let temp;
            temp = numbers[i];
            numbers[i] = numbers[j]
            numbers[j] = temp
        }
    }
}

console.log(numbers);