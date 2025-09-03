// 요구사항--------------------------------------------------

// 1. **학생 성함**을 `prompt`로 입력받는다. (허용된 이름: `준호`, `성영`, `형욱`, `준상`, `명진`)
// 2. 이어서 **세 과목 점수**를 `prompt`로 각각 입력받는다. (HTML, CSS, JS)
// 3. 미리 정의된 **5명의 학생 객체** 중 **이름이 일치하는 학생**을 찾는다. (찾는다라는 기능을 구현한다.)
// 4. 찾으면, 그 학생 객체에 `scores` 속성(내부에 `html`, `css`, `js`)을 **할당/갱신**한다.
// 5. 해당 학생의 **평균 점수**를 구하고 (기능 구현) **등급**을 매겨 출력한다. (console.log로 출력)

// ## 필수 규칙
// - **배열 금지**(학생 목록을 배열로 두지 말 것)
// - **객체만으로 데이터 구성**, `console.log()`로 결과 확인
// - `선언`과 `호출`을 명확히 지킵니다.

// 요구사항 끝--------------------------------------------------


////-------------------------1. 전역변수 선언-------------------------
const seletedStudent = prompt("학생 이름을 입력하세요.");

//점수 객체 (구조 선언)
const socre = {
    scoreHtml : 0,
    scoreCss : 0,
    scoreJs : 0
}

//동일한 구조가 5번 반복으로 나오니 비효율 같으나... 배열사용 금지 조건이므로 그냥 나열한다.
const stdJH = {
    stdKorName : '준호',
    score : {...socre},
    avg : 0,
    grade : ""
}
const stdSY = {
    stdKorName : "성영",
    score : {...socre},
    avg : 0,
    grade : ""
}
const stdHW = {
    stdKorName : "형욱",
    score : {...socre},
    avg : 0,
    grade : ""
}
const stdJS = {
    stdKorName : "준상",
    score : {...socre},
    avg : 0,
    grade : ""
}
const stdMJ = {
    stdKorName : "명진",
    score : {...socre},
    avg : 0,
    grade : ""
}

////-------------------------2. 함수 선언-------------------------
function searchStudent(){
    if(seletedStudent == stdJH.stdKorName
        || seletedStudent == stdSY.stdKorName
        || seletedStudent == stdHW.stdKorName
        || seletedStudent == stdJS.stdKorName
        || seletedStudent == stdMJ.stdKorName){
        // alert("선택된 학생을 찾았습니다.");
        return true;
    }else{
        return false;
    }
}

//평균 구하기 함수
function getAvg(scoreHtml, scoreCss, scoreJs){
    return (scoreHtml + scoreCss + scoreJs) /3;
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
if(searchStudent(seletedStudent)){ //등록된 학생이 존재할 경우
    const scoreHtml = Number(prompt(seletedStudent+" 학생의 HTML 점수를 입력하세요."));
    const scoreCss  = Number(prompt(seletedStudent+" 학생의 CSS 점수를 입력하세요."));
    const scoreJs   = Number(prompt(seletedStudent+" 학생의 JS 점수를 입력하세요."));
    const scoreAvg = getAvg(scoreHtml, scoreCss, scoreJs); //평균구하기 함수 호출(등급 구할 때 필요한거니까 여기서 호출했음)
    let resultGrade = ""; //지역변수 (결과값 처리를 위해 선언)    

    if (scoreAvg > 100 || scoreAvg < 0){
        alert("입력범위 초과오류 (점수는 0~100 사이로만 입력 바랍니다.");
    } else {
        //등급결과 출력
        resultGrade = getGrade(scoreAvg);
        alert(seletedStudent + " 학생의 등급은 "+resultGrade + " 입니다.");

        //학생 객체별 결과값 담기 (최종 경로가 콘솔 로그에 모두 찍을 것임)
        if(seletedStudent == stdJH.stdKorName){
            stdJH.score.scoreHtml = scoreHtml;
            stdJH.score.scoreCss = scoreCss;
            stdJH.score.scoreJs = scoreJs;
            stdJH.avg = scoreAvg;
            stdJH.grade = resultGrade;
        }else if(seletedStudent == stdSY.stdKorName){
            stdSY.score.scoreHtml = scoreHtml;
            stdSY.score.scoreCss = scoreCss;
            stdSY.score.scoreJs = scoreJs;
            stdSY.avg = scoreAvg;
            stdSY.grade = resultGrade;
        }else if(seletedStudent == stdHW.stdKorName){
            stdHW.score.scoreHtml = scoreHtml;
            stdHW.score.scoreCss = scoreCss;
            stdHW.score.scoreJs = scoreJs;
            stdHW.avg = scoreAvg;
            stdHW.grade = resultGrade;
        }else if(seletedStudent == stdJS.stdKorName){
            stdJS.score.scoreHtml = scoreHtml;
            stdJS.score.scoreCss = scoreCss;
            stdJS.score.scoreJs = scoreJs;
            stdJS.avg = scoreAvg;
            stdJS.grade = resultGrade;
        }else if(seletedStudent == stdMJ.stdKorName){
            stdMJ.score.scoreHtml = scoreHtml;
            stdMJ.score.scoreCss = scoreCss;
            stdMJ.score.scoreJs = scoreJs;
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
    
}else{
    alert("등록된 학생이 없습니다.\n학생 이름을 정확하게 입력바랍니다.");
}