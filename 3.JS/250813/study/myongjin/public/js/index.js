let student = "송명진";
let grade;
const HTML = 90;
const CSS = 90;
const JS = 90;
let average = (HTML + CSS + JS) / 3 ;
let message = student + " " + "님의 점수는"

if (average >= 90) {
    grade = "A";
} else if (average >= 80 && average <= 89) {
    grade = "B";
} else if (average >= 70 && average <=79){
    grade = "C";
} else if (average < 78 && average >=0){
    grade = "F";
}

console.log(`${message} 평균 : ${average.toFixed()}점, 등급: ${grade} 입니다.`);