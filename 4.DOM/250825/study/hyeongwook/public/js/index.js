//6강의실 - 학생 목록
//createStudent(); //호출
//prompt로 이름 입력
//오늘 몇시간 공부?
//블로그 작성 시간?
//주말에 몇시간 공부?

//Result
// 준호 (ID : 0)
//오늘 공부: 8시간
//블로그 작성:2시간
//주말 공부 예정:15시간
//----------------------------------------------------------------------------------------//
const studentsDB = []; //이중배열 형태로 ID값과 함께 전체 데이터를 담기 위한 임시DB

//배열(임시DB)에 담긴 전체 데이터를 화면에 출력
function printAllStdsToScreen(){ 
    document.body.innerHTML = ""; //화면 정리 (두번째 이상 createStudent() 사용시 화면 중복처리 방지)
    studentsDB.forEach((asValue, asIndex)=> {
        const tempUl = document.createElement('ul'); //인덱스 별로 ul 구분
        asValue.forEach((value, index) => {
            const tempLi = document.createElement('li');
            if( index === 0){       //index 1 : 이름 (id)                
                tempLi.innerHTML = value; 
                // tempLi.innerHTML += `<b> (ID : ${asIndex})</b>`; //이렇게 해도 되지만 span태그를 인라인으로 붙이는게 나을 듯
                const spanId = document.createElement('span');
                spanId.innerHTML =`&nbsp;(ID : ${asIndex})`;
                spanId.style.fontWeight = 'bold';
                tempLi.appendChild(spanId);
            }else if( index === 1){ //index 1 : study
                tempLi.innerHTML = `오늘 공부에 투자한 시간 : ${value}`;
            }else if( index === 2){ //index 2 : blog
                tempLi.innerHTML = `오늘 블로그에 투자한 시간 : ${value}`;
            }else if( index === 3){ //index 3 : weekend
                tempLi.innerHTML = `주말동안 공부한 시간 : ${value}`;
            }
            tempUl.appendChild(tempLi);
        });
        document.body.appendChild(tempUl);
    });
}

//단일 트랜잭션
function setStudentInfo(){
    const arrStudent= []; //id 별 학생정보를 담을 1차원 배열

    const pName = prompt("학생 이름을 입력하세요.");
    const pTodayStdTm = Number(prompt(`${pName} 학생의 오늘 공부에 투자한 시간은?`));
    const pBlogTm = Number(prompt(`${pName} 학생의 오늘 블로그 작성에 투자한 시간은?`));
    const pWkndStdTm = Number(prompt(`${pName} 학생의 주말동안 공부한 시간은?`));

    arrStudent.push(pName);         //index 0   bold
    arrStudent.push(pTodayStdTm);   //index 1
    arrStudent.push(pBlogTm);       //index 2
    arrStudent.push(pWkndStdTm);    //index 3

    studentsDB.push(arrStudent); //입력 학생별 db insert 
    
}

function createStudent(){
    let index = studentsDB.length;
    // 과제 요구사항 - 사용방법3 조건에는 위배되는 항목 
    // (## 사용 방법3. 여러 번 실행하면 `ul#student-list`에 학생들이 계속 추가됨)
    while(true){
        let cofirmMsg = `[Index ${index}] 학생정보를 입력하시겠습니까?`;
        if (index > 0) cofirmMsg = `[Index ${index}] 학생정보를 입력하시겠습니까?\n\n'취소' 버튼을 클릭하면\n${index}건의 정보가 화면에 출력됩니다.`;

        if(confirm(cofirmMsg)){
            setStudentInfo(); 
            index++;
        } else {
            // console.log(studentsDB);
            printAllStdsToScreen(); //입력작업 종료 후 화면 출력
            break;
        }
    }
}

this.createStudent(); //Let's go;