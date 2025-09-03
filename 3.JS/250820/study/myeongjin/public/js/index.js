//선택 정렬 버블 정렬
//0번째 비교해서 작냐 앞에 오름차순 

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[lowest] > arr[j]) {
                lowest = j;                
            }
            if (i !== lowest) {
                let temp
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }            
        }
    }
}
const numbers = [22, 55, 66, 11, 44];
selectionSort(numbers);
console.log(numbers);



// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j <arr.length; j++){
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//            }
//         }
//     }
//     return arr;
// }

// const nums = [22,11,31,65,33,54,23];
// console.log(bubbleSort(nums));


// console.log(bubbleSort([22,11,65,33,12,12,32]));



