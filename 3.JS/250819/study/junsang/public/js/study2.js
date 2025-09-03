const students = {
    student1: { name: "준호" },
    student2: { name: "성영" },
    student3: { name: "형욱" },
    student4: { name: "준상" },
    student5: { name: "명진" },
};

const inputStudentName = prompt(" **학생 성함을 입력하세요**\n(`준호`, `성영`, `형욱`, `준상`, `명진`)");
const findStudent = findByStudentName(inputStudentName);

if(!findStudent) {
    alert("학생을 찾지 못하였습니다.");
} else {
    const score_HTML = Number(prompt("HTML 점수를 입력하세요:"));
    const score_CSS = Number(prompt("CSS 점수를 입력하세요:"));
    const score_JAVASCRIPT = Number(prompt("JS 점수를 입력하세요:"));
    const result = studyAverage(score_HTML, score_CSS, score_JAVASCRIPT);
    const scores = {
        html: score_HTML,
        css: score_CSS,
        js: score_JAVASCRIPT,
    };
    findStudent.result = { ...result };
    findStudent.scores = { ...scores };
    console.log(findStudent);
}