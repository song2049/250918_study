// length: 6개 / 인덱스: 5개

// 오름차순
function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
        let lowestNumber = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[lowestNumber]) {
                lowestNumber = j;
            }
        }
        if(lowestNumber !== i) {
            const temp = array[lowestNumber];
            array[lowestNumber] = array[i];
            array[i] = temp
        }
    }
    return array;
}

// 내림차순
function selectionSortdown(array) {
    for(let i = 0; i < array.length - 1; i++) {
        let highestNumber = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] > array[highestNumber]) {
                highestNumber = j;
            }
        }
        if(highestNumber !== i) {
            const temp = array[highestNumber];
            array[highestNumber] = array[i]
            array[i] = temp
        }
    }
    return array;
}

const numbers = [22, 55, 66, 11, 44, 22, 59, 86, 88];
const sortUpResult = selectionSort(numbers);
console.log(sortUpResult);

const sortDownResult = selectionSortdown(numbers)
console.log(sortDownResult);