const numbers = [22, 55, 66, 11, 44, 99, 65, 74, 26, 13, 18, 64];

for(let i = numbers.length - 1; i >= 0; i--) {
    for(let j = i - 1; j >= 0; j--) {
        if(numbers[i] > numbers[j]) {
            let temp;
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers);
