const students = [
    {
        name: "성영",
        todayStudy: 2,
        blogHour: 2
    },
    // {
    //     name: "명진",
    //     todayStudy: 2,
    //     blogHour: 2
    // }
]

const studentList = document.querySelector("#studentList");

// create
function createStudent() {
    const name = prompt("이름을 입력해주세요.");
    const todayStudy = Number(prompt("오늘 몇 시간 공부?"));
    const blogHour = Number(prompt("블로그 몇 시간 작성?"));

    const info = {
        name: name,
        todayStudy: todayStudy,
        blogHour: blogHour
    }

    students.push(info)
}

// render
function renderStudent() {
    for(let i = 0; i < students.length; i++) {
        const newLi = document.createElement("li");
        const newP1 = document.createElement("p");
        const newP2 = document.createElement("p");
        const newP3 = document.createElement("p");

        newP1.innerHTML = students[i].name
        newP2.innerHTML = students[i].todayStudy
        newP3.innerHTML = students[i].blogHour

        studentList.appendChild(newLi)
        newLi.appendChild(newP1)
        newLi.appendChild(newP2)
        newLi.appendChild(newP3)
    }
}