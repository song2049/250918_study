// 1. 변수선언
const pointHtml = 90; //HTML점수
const pointCss = 85;  //CSS점수
const pointJs = 95;   //Javascript점수
let pointAvg = (pointHtml + pointCss + pointJs ) / 3; //3과목 평균
let grade = "F"; //초기값 : F

// 2. 등급계산
if (pointAvg >= 90){
    grade = "A";
}else if (pointAvg > 80 && pointAvg <= 89){
    grade = "B";
}else if (pointAvg > 70 && pointAvg <= 79){
    grade = "C";
}else if (pointAvg > 60 && pointAvg <= 69){
    grade = "D";
}else {
    grade = "F";
}

// 3.결과 출력
console.log("HTML점수: "+pointHtml);
console.log("CSS점수: "+pointCss);
console.log("Javascript점수: "+pointJs);
console.log("");
console.log("평균점수: "+pointAvg);
console.log("등급: "+grade);


