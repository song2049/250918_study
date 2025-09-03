// 참고 문서: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// 과목 점수 입력받기 (prompt → 문자열 → Number 변환)
const korean = Number(prompt("HTML 점수를 입력하세요:"));
const math = Number(prompt("CSS 점수를 입력하세요:"));
const english = Number(prompt("JS 점수를 입력하세요:"));

// 평균 계산 (더하기 + 나누기 /)
const average = (korean + math + english) / 3;

let grade; // 등급 저장 변수

// 평균 점수에 따른 등급 판정
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// 결과 출력
console.log(`평균: ${average}점, 등급: ${grade}`);
