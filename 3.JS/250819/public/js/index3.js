// ES5
// const array1 = new Array();

const array1 = [
    "주병현",
    "최형욱",
    "김성영",
    "유준상",
    "송준호",
    "송명진"
];

// 인덱스
// console.log(array1[0]);
// console.log(array1[1]);
// console.log(array1[2]);
// console.log(array1[3]);
// console.log(array1[4]);
// console.log(array1[5]);

for(let i = 0; i < array1.length; i++) {
    if(i === 0) {
        array1[i] = `${array1[i]}: 나는 교강사다.`
    } else {
        array1[i] = `${array1[i]}: 나는 학생이다.`
    }
}

console.log(array1);
