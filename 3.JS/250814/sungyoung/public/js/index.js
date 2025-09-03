// console.log("1 X 1 = 1");
// console.log("1 X 2 = 1");
// console.log("1 X 3 = 1");
// console.log("1 X 4 = 1");
// console.log("1 X 5 = 1");
// console.log("1 X 6 = 1");
// console.log("1 X 7 = 1");
// console.log("1 X 8 = 1");
// console.log("1 X 9 = 1");
// console.log("2 X 1 = 2");
// console.log("2 X 2 = 4");
// console.log("2 X 3 = 6");
// console.log("2 X 4 = 8");
// console.log("2 X 5 = 10");

// for(let i = 1; i < 10; i++) {
//     console.log(`----${i}단-----`);
//     for(let j = 1; j < 10; j++) {
//         console.log(`${i} X ${j} = ${i * j}`);
//     }
//     console.log("끝");
// }


// console.log(6 + 12 + 18);

const default1 = 6;
let sum = 0;

for(let i = 1; i <= 100; i++) {
    if(i % default1 === 0) {
        sum = sum + i;
        // sum += i
    }
}

console.log(sum);