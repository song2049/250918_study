const students = [
    {
        name: "성영",
        todayStudy: 2,
        blogHour: 2
    },
    {
        name: "명진",
        todayStudy: 2,
        blogHour: 2
    }
]

const studentList = document.querySelector("#studentList");
// const studentList = document.getElementById("studentList");

// const newLi = document.createElement("li");
// const newLi2 = document.createElement("li");

// studentList.appendChild(newLi)
// studentList.appendChild(newLi2)

// 비효율로 접근하는데, 화면에 보이는 li가 두 개임. 결국 특정 length만큼 돌면 되겠다.

//                0 <  2

console.log(students[0].name);
console.log(students[0].todayStudy);
console.log(students[0].blogHour);

console.log(students[1].name);
console.log(students[1].todayStudy);
console.log(students[1].blogHour);

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
