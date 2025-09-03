const HTML = 70;
const CSS = 60;
const JavaScript = 75;
let average = 60;

console.log("평균:" + average + "점");

if (average >= 90) {
    console.log("등급: A");
} else if (average >= 80 && average <= 89) {
    console.log("등급: B");
} else if (average >= 70 && average <= 79) {
    console.log("등급: C");
} else if (average >= 60 && average <= 69) {
    console.log("등급: D");
} else if (average <= 59) {
    console.log("등급: F");
}