/*
## 목표
prompt()`로 학생 정보를 입력, 학생 카드(Create=prompt), 등록한 학생(Read=<li> 요소)
## 사용 방법
1. 브라우저에서 페이지를 연다 (`Live Server`)
2. 개발자 도구 콘솔에서 다음을 입력한다: createStudent();
3. 여러 번 실행하면 `ul#student-list`에 학생들이 계속 추가됨
4. 한 번 등록하면 자동으로 `studentsDB` 배열에도 저장됨
point: `document.createElement`, `appendChild`, `innerHTML + 렌더링 과정
*/
alert("사용방법:\nF12 -> console -> createStudent();");
console.log("createStudent()를 호출하세요");

const studentsDB = [];
let studentId = 0;

const container = document.createElement('ul');
container.id = 'student-list';
document.body.appendChild(container);

function inputStudent() {
    const name = prompt("이름을 입력하세요");
    const study = Number(prompt("오늘 공부 몇 시간 했나요?"));
    const blog = Number(prompt("오늘 블로그 몇 시간 쓸 건가요?"));
    const weekend = Number(prompt("주말에 공부할 예정 시간은?"));
    return [name, study, blog, weekend];
}

function addStudent(studentData) {
    const student = [studentId];
    for (let i = 0; i < studentData.length; i++) {
        student.push(studentData[i]);
    }
    studentsDB.push(student);
    studentId++;
    
    return student;
}

function printStudents(student) {
    const li = document.createElement('li');
    li.innerHTML =
        "이름: " + student[1] +
        " (ID: " + student[0] + ")<br>" +
        "오늘 공부: " + student[2] + "시간<br>" +
        "블로그 작성: " + student[3] + "시간<br>" +
        "주말 공부 예정: " + student[4] + "시간";
    container.appendChild(li);
}

function createStudent() {
    const data = inputStudent();
    const newStudent = addStudent(data);
    printStudents(newStudent);
}

