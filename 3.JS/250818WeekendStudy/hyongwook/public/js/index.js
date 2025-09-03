//1. Prompt : 어떤 기능을 원하실까요? "평균" 또는 "구구단"을 하나만 정확히 입력해주세요.
//1. 평균
/**
 * 1. 국어 점수
 * 2. 수학 점수
 * 3. 영어 점수
 * result : alert(grade);
 */

//2. 구구단
/**
 * 1. 시작단 (1~9)
 * 2. 끝단  (1~9)
 */


//평균구하기
function getAvg(){
    // 1. 변수선언
    const pointKor =    Number(prompt(`국어 점수를 입력하세요.`));
    const pointEng =    Number(prompt(`영어 점수를 입력하세요.`));
    const pointMath =   Number(prompt(`수학 점수를 입력하세요.`));

    const pointAvg = (pointKor + pointEng + pointMath ) / 3; //3과목 평균
    let grade = "F"; //초기값 : F
    
    // 2. 등급계산
    if (pointAvg >= 90){
        grade = "A";
    }else if (pointAvg >= 80 && pointAvg <= 89){
        grade = "B";
    }else if (pointAvg >= 70 && pointAvg <= 79){
        grade = "C";
    }else if (pointAvg >= 60 && pointAvg <= 69){
        grade = "D";
    }else {
        grade = "F";
    }
    return grade;
}

//구구단
function guguDan(){    
    
    //변수선언
    let firstNumber = 0; //초기값 : 0
    let secondNumber = 0;
    

    //사용자 변수 입력 및 Validation
    const n1 = Number(prompt(`시작단 (1~9)`));
    if (n1 < 1 || n1 > 9){
        alert("입력범위를 초과하였습니다.\n처음부터 다시 실행바랍니다.");
        return;
    }
    const n2 = Number(prompt(`끝단 (1~9)`));
    if (n2 < 1 || n2 > 9){
        alert("입력범위를 초과하였습니다.\n처음부터 다시 실행바랍니다.");
        return;
    }

    if (n1 < n2){
        firstNumber = n1;
        secondNumber = n2;
    }else{
        firstNumber = n2;
        secondNumber = n1;
    }

    for (let i = firstNumber; i <= secondNumber; i++) {
        
        for (let j = 1; j <= 9; j++) {
            if(j == 1){
                console.log(`---${i}단!---`);    
            }
            console.log(`${i} X ${j} = `+ i*j  );
            if(j == 9){
                console.log(``);  //알아보기 쉽게 한줄 띄움!  
            }
        }
    }
}

const appKind = prompt(`어떤 기능을 원하실까요?\n"평균" 또는 "구구단"을 하나만 정확히 입력해주세요.`);
if (appKind == "평균"){
    alert(getAvg());
} else if (appKind == "구구단"){
    guguDan();
} else {
    alert(`잘못 입력하셨습니다.\n"평균" 또는 "구구단"을 정확히 하나만 입력해주세요.`);
}