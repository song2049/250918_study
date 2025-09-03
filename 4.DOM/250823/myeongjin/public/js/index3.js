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

    renderStudent(info)
}

// render
function renderStudent(info) {
    /*
        info = { }
    */
    const newLi = document.createElement("li");
    const newP1 = document.createElement("p");
    const newP2 = document.createElement("p");
    const newP3 = document.createElement("p");

    newP1.innerHTML = info.name
    newP2.innerHTML = info.todayStudy
    newP3.innerHTML = info.blogHour

    studentList.appendChild(newLi)
    newLi.appendChild(newP1)
    newLi.appendChild(newP2)
    newLi.appendChild(newP3)
}