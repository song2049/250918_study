////-------------------------1. 전역변수 선언-------------------------
const seletedStudent = prompt("학생 이름을 입력하세요.");

//점수 객체 (구조 선언)
const socre = {
    scoreHtml : 0,
    scoreCss : 0,
    scoreJs : 0
}

// 기본 속성 객체
const baseProperties = {
    score : {...socre},
    avg : 0,
    grade : ""
}

//동일한 구조가 5번 반복으로 나오니 비효율 같으나... 배열사용 금지 조건이므로 그냥 나열한다.
const stdJH = {
    ...baseProperties,
    stdKorName : '준호',
}
const stdSY = {
    ...baseProperties,
    stdKorName : "성영",
}
const stdHW = {
    ...baseProperties,
    stdKorName : "형욱",
}
const stdJS = {
    ...baseProperties,
    stdKorName : "준상",
}
const stdMJ = {
    ...baseProperties,
    stdKorName : "명진",
}

////-------------------------2. 함수 선언-------------------------
function getStudentByName(name) {
    if (name === stdJH.stdKorName) return stdJH;
    if (name === stdSY.stdKorName) return stdSY;
    if (name === stdHW.stdKorName) return stdHW;
    if (name === stdJS.stdKorName) return stdJS;
    if (name === stdMJ.stdKorName) return stdMJ;
    return null;
}

//평균 구하기 함수
function getAvg(scoreHtml, scoreCss, scoreJs){
    return (scoreHtml + scoreCss + scoreJs) / 3;
}

//등급 구하기 함수
function getGrade(scoreAvg){    
    let grade = "";
    if (scoreAvg >= 90){
        grade = "A";
    }else if (scoreAvg >= 80 && scoreAvg <= 89){
        grade = "B";
    }else if (scoreAvg >= 70 && scoreAvg <= 79){
        grade = "C";
    }else if (scoreAvg >= 60 && scoreAvg <= 69){
        grade = "D";
    }else {
        grade = "F";
    }
    return grade;
}

////-------------------------3. 실행(with 함수호출)-------------------------
if(getStudentByName(seletedStudent)) { //등록된 학생이 존재할 경우
    const scoreHtml = Number(prompt(seletedStudent + " 학생의 HTML 점수를 입력하세요."));
    const scoreCss  = Number(prompt(seletedStudent + " 학생의 CSS 점수를 입력하세요."));
    const scoreJs   = Number(prompt(seletedStudent + " 학생의 JS 점수를 입력하세요."));
    const scoreAvg = getAvg(scoreHtml, scoreCss, scoreJs); //평균구하기 함수 호출(등급 구할 때 필요한거니까 여기서 호출했음)
    const allScore = { scoreHtml, scoreCss, scoreJs }
    
    let resultGrade = ""; //지역변수 (결과값 처리를 위해 선언)    

    if (scoreAvg > 100 || scoreAvg < 0){
        alert("입력범위 초과오류 (점수는 0~100 사이로만 입력 바랍니다.");
    } else {
        //등급결과 출력
        resultGrade = getGrade(scoreAvg);
        alert(seletedStudent + " 학생의 등급은 " + resultGrade + " 입니다.");
        //학생 객체별 결과값 담기 (최종겨로가 콘솔 로그에 모두 찍을 것임)
        if(seletedStudent == stdJH.stdKorName){
            stdJH.score = { ...allScore }
            stdJH.avg = scoreAvg;
            stdJH.grade = resultGrade;
        }else if(seletedStudent == stdSY.stdKorName){
            stdSY.score = { ...allScore }
            stdSY.avg = scoreAvg;
            stdSY.grade = resultGrade;
        }else if(seletedStudent == stdHW.stdKorName){
            stdHW.score = { ...allScore }
            stdHW.avg = scoreAvg;
            stdHW.grade = resultGrade;
        }else if(seletedStudent == stdJS.stdKorName){
            stdJS.score = { ...allScore }
            stdJS.avg = scoreAvg;
            stdJS.grade = resultGrade;
        }else if(seletedStudent == stdMJ.stdKorName){
            stdMJ.score = { ...allScore }
            stdMJ.avg = scoreAvg;
            stdMJ.grade = resultGrade;
        }

        //5명의 학생에 대한 객체내역 log 출력
        console.log(stdJH);
        console.log(stdSY);
        console.log(stdHW);
        console.log(stdJS);
        console.log(stdMJ);
    }
} else {
    alert("등록된 학생이 없습니다.\n학생 이름을 정확하게 입력바랍니다.");
}