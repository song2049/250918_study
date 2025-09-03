// 6강의실 - 학생 목록
const studentsDB = []; // { name, study, blog, weekend } 객체 리스트

function promptStudentInfo() {
    const name = prompt("학생 이름을 입력하세요.");
    const study = Number(prompt(`${name} 학생의 오늘 공부 시간은?`));
    const blog = Number(prompt(`${name} 학생의 블로그 작성 시간은?`));
    const weekend = Number(prompt(`${name} 학생의 주말 공부 시간은?`));

    return { name, study, blog, weekend };
}

function printAllStudents() {
    document.body.innerHTML = ""; // 기존 내용 제거

    studentsDB.forEach((student, id) => {
        const ul = document.createElement("ul");

        const liName = document.createElement("li");
        liName.innerHTML = `${student.name} <span style="font-weight:bold;">(ID : ${id})</span>`;

        const liStudy = document.createElement("li");
        liStudy.textContent = `오늘 공부에 투자한 시간 : ${student.study}`;

        const liBlog = document.createElement("li");
        liBlog.textContent = `오늘 블로그에 투자한 시간 : ${student.blog}`;

        const liWeekend = document.createElement("li");
        liWeekend.textContent = `주말동안 공부한 시간 : ${student.weekend}`;
        
        ul.appendChild(liName);
        ul.appendChild(liStudy);
        ul.appendChild(liBlog);
        ul.appendChild(liWeekend);

        document.body.appendChild(ul);
    });
}

function createStudent() {
    while (true) {
        const index = studentsDB.length;
        const confirmMsg = index === 0
            ? `[Index ${index}] 학생정보를 입력하시겠습니까?`
            : `[Index ${index}] 학생정보를 입력하시겠습니까?\n\n'취소'를 누르면 ${index}건의 정보가 화면에 출력됩니다.`;

        if (!confirm(confirmMsg)) {
            printAllStudents();
            break;
        }

        const newStudent = promptStudentInfo();
        studentsDB.push(newStudent);
    }
}

this.createStudent(); // 시작
// [
//     {
//         id: ""
//         name: ""
//     },
//     {
//         id: ""
//         name: ""
//     },
//     {
//         id: ""
//         name: ""
//     },
    
// ]
