// 입력값이 주어짐. 이 입력값에 따라서 3의 배수이면 3의 배수가 맞다. 아니다를 출력
// 3의 배수 또는 6의 배수이면 맞다 아니면 틀리다

// 3, 6, 9, 12, 18, 24, 30
const inputNumber = Number(prompt("숫자를 입력하세요"));
// const inputNumber = 3;

if(inputNumber % 3 === 0 || inputNumber % 6 === 0) alert("맞다");
else {
    alert("아니다");
}

const array1 = [2,5,1,5,3,4,6,2,7,4,4,6,76,293];

// 최소값 찾기
// 최대값 찾기
// 배열 숫자들의 합계 구하기