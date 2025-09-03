const studentName = prompt("준호, 명진, 형욱, 성영, 준상");

const students = {
    student1: { name: "준호"},
    student2: { name: "형욱"},
    student3: { name: "성영"},
    student4: { name: "준상"},
    student5: { name: "명진"}
}

const findStudent = findByStudentName(studentName);

if(!findStudent) {
    alert("학생 못찾겠는데여?")
} else {
    const scoreHTML = Number(prompt("HTML 점수"));
    const scoreCSS = Number(prompt("CSS 점수"));
    const scoreJS = Number(prompt("JS 점수"));
    
    const scores = {
        html: scoreHTML,
        css: scoreCSS,
        js: scoreJS
    }

    const average = studyAverage(scoreHTML, scoreCSS, scoreJS);
    findStudent.scores = { ...scores };
    findStudent.average = { ...average };
    console.log(findStudent);
}