const stuName = prompt("학생 이름을 입력하시길 바랍니다. sungYoung, junho, hyongWook, junsang, myeongJin");

const student1 = { name : "sungYoung" }
const student2 = { name : "junho" }
const student3 = { name : "hyongWook" }
const student4 = { name : "junsang" }
const student5 = { name : "myeongJin" }

const result = findByStudentName(stuName);

if(!result) { 
    alert("해당 학생이 존재하지 않는다.");
} else {
    const htmlS = Number(prompt("html 점수를 입력하세요"));
    const cssS = Number(prompt("css 점수를 입력하세요"));
    const jsS = Number(prompt("js 점수를 입력하세요"));
    result.scores = {
        html: htmlS,
        css: cssS,
        js: jsS
    };
    const average = studyAverage(htmlS, cssS, jsS);
    result.average = { ...average };
    console.log(result);
}

