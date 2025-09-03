const students = [
    {
        id: 0,
        name: "성영"
    },
    {
        id: 1,
        name: "준호"
    }
]

const studentList = document.querySelector("#studentList");

function renderStudent() {
    for(let i = 0; i < students.length; i++){
        const li = document.createElement("li");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        p1.innerHTML = students[i].id
        p2.innerHTML = students[i].name

        studentList.appendChild(li);
        li.appendChild(p1);
        li.appendChild(p2);
    }
}

function createStudent() {}
