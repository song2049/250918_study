const students = [
    {
        name: "성영",
        weekdays: 2,
        blog: 2,
        weekend: 2
    },
    {
        name: "준호",
        weekdays: 2,
        blog: 2,
        weekend: 2
    },
    {
        name: "명진",
        weekdays: 2,
        blog: 2,
        weekend: 2
    },
    {
        name: "형욱",
        weekdays: 2,
        blog: 2,
        weekend: 2
    },
    {
        name: "준상",
        weekdays: 2,
        blog: 2,
        weekend: 2
    }
]

const studentList = document.querySelector("#studentList");
let inputStartNumber = 0;

function removeStudent() {
    while(studentList.firstChild)  {
        studentList.firstChild.remove()
    }
}

function readStudent() {
    for(let i = 0; i < students.length; i++){
        const li = document.createElement("li");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        
        p1.innerHTML = `${students[i].name}님`
        p2.innerHTML = `${students[i].weekdays} 시간`
        p3.innerHTML = `${students[i].blog} 시간`
        p4.innerHTML = `${students[i].weekend} 시간`
       
        studentList.appendChild(li);
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        li.appendChild(p4);
    }
 }
function createStudent() {
    const name = prompt("이름");
    const weekdays = Number(prompt("평일: 개인 공부 시간을 입력하세요"))
    const blog = Number(prompt("블로그 작성 시간을 입력하세요"))
    const weekend =  Number(prompt("주말: 개인 공부 시간을 입력하세요"))

    const student = {
        name,
        weekdays,
        blog,
        weekend
    }
    
    if(inputStartNumber === 0) {
        students.splice(0, students.length);
    }

    // students 비워줘야지.
    students.push(student);
    removeStudent();
    readStudent()
    inputStartNumber++;
}

readStudent();



/*

    해결하지 못한 문제

    값을 입력하면 입력한 학생 제외하고 보이지 않는 방법

        그러면, 내가 입력한 값을 넣기 전, 기존 데이터 구조를 전부 다 비워야겠지.
        splice를 활용해보자.

        내가 시작한 증거 => 숫자 값을 활용한다.

    입력값들 앞에 문자 입력하는 방법

*/





