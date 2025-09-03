const cho = prompt("어떤 기능을 원합니까?\n1. 평균\n2. 구구단\n번호를 입력하세요:");

function average(kor, math, eng) {
    const total = kor + math + eng;
    const average = total / 3;
    
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else {
        grade = "F";
        alert("F는 재수강하세요!");
    }
    alert(`총점: ${total}점\n평균: ${average.toFixed(1)}점\n등급: ${grade}`);
    console.log(`평균: ${average.toFixed(1)}점, 등급: ${grade}`);
}

function gugudan(firstNumb, secondNumb) {
    for (let i = firstNumb; i <= secondNumb; i++) {
        console.log(`--- ${i}단 ---`);
        for(let j = 1; j <= 9; j++) {
            console.log(`${i} X ${j} = ${i * j}`);
        }
    }
}

if (cho === "1") { 
    const kor = Number(prompt("국어 점수를 입력하세요:"));
    const math = Number(prompt("수학 점수를 입력하세요:"));
    const eng = Number(prompt("영어 점수를 입력하세요:"));
    average(kor, math, eng);
} else if (cho === "2") {
    const firstNumb = Number(prompt("첫 번째 단을 선택해주세요 (1~9)"))
    const secondNumb = Number(prompt("두 번째 단을 선택해주세요 (1~9):"));
    gugudan(firstNumb, secondNumb);
} else {
    alert("1 또는 2만 입력해주세요!");
}

// console.log("1 X 1 = 1");
// console.log("1 X 2 = 2");
// console.log("1 X 3 = 3");
// console.log("1 X 4 = 4");
// console.log("1 X 5 = 5");
// console.log("1 X 6 = 6");
// console.log("1 X 7 = 7");
// console.log("1 X 8 = 8");
// console.log("1 X 9 = 9");
// console.log("2 X 1 = 2");
// console.log("2 X 2 = 4");
// console.log("2 X 3 = 6");
// console.log("2 X 4 = 8");
// console.log("2 X 5 = 10");
// console.log("2 X 6 = 12");
// console.log("2 X 7 = 14");
// console.log("2 X 8 = 16");
// console.log("2 X 9 = 18");






















// const cho  = Number(prompt("어떤 기능을 원합니까? \n구구단? \n평균? 하나만 정확히 입력하세요."))

// // const HTML = Number(prompt("국어점수를 입력하세요."));
// // const CSS = Number(prompt("수학점수를 입력하세요."))
// // const JS = Number(prompt("영어점수를 입력하세요."))


// if (cho === 1){
//     function report(html,css,javascript){
//         const count = html+css+javascript;
//         const average = count/3;
//         let grade;
//         if(average>=90){
//         grade = "A";
//         } else if (average >= 80 && average <= 89){
//             grade = "B";
//         } else if (average >= 70 && average <=79){
//             grade = "C";
//         } else {
//             grade = "F";
//         alert(`${grade}는 재수강하세요.`);
//         }
//         alert(`당신의 성적은 ${grade}입니다.`);
//         return {grade, averge}; 
//     }
//     if (type === "평균") {
//     const HTML = Number(prompt("국어점수를 입력하세요"));
//     const CSS = Number(prompt("수학점수를 입력하세요."));
//     const JS = Number(prompt("영어 점수를 입력하세요."));
//     const grade = gradeCalculator(HTML, CSS, JS);
//     if(grade) alert(grade);
//     console.log(`${average.toFixed()}점, 등급: ${grade} 입니다.`);
//     }
// }

// if(cho === 2){
//     const cho_sec=Number(prompt("구구단을 선택하시오(1~9)"));
//     for (i = 1; i <= 9; i += 1){
//    console.log(` --- ${i}단! ---`)
//     for(let o = 1; o <= 9; o++){
//     console.log(`${i} X ${o} = ${i * o}`);
//     }
//     }
//     console.log(i)
    
// }

// // }

// // if(type === "구구단") {
// //     const startNum = Number(prompt("시작 단 (1~9):"));
// //     const endNum = Number(prompt("끝 단(1~9):"));
// //     const result = gugudan(startNum, endNum);
// //     if(result) alert(result);
// // }


