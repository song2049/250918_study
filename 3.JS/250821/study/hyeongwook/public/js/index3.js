// 학생 클래스

/*
    1. 교강사가 채점해준 점수들을 학생 개별 정보 보관할 책임
*/
class Students {
    constructor(name, html, css, js, grade, avg) {
        this.name = name;
        this.html = html;
        this.css = css;
        this.js = js;
        this.grade = grade;
        this.avg = avg;
    }
}
/* 
    1. 학생분들 리스트를 가지고 있어야 할 책임 (배열 객체) 
    2. 학생분들의 점수를 입력할 책임 (inputGrade) 
    3. 특정 학생분의 등급을 계산할 책임 (getGrade)
    4. 학생분들의 점수를 기록해야할 책임 (setGrade)
    5. 학생 목록을 출력할 책임 (printGrades)
    6. 반복적으로 점수를 입력받을 책임 (inputUntilDone)
*/
// 교강사 클래스
class Teacher {
    constructor() {
        this.students = [];
    }

    setGrade(name, html, css, js, grade, avg) {
        const student = new Students(name, html, css, js, grade, avg);
        this.students.push(student);
    }

    getGrade(scoreAvg) {    
        let grade = "";
        if (scoreAvg >= 90){
            grade = "A";
        } else if (scoreAvg >= 80 && scoreAvg <= 89){
            grade = "B";
        } else if (scoreAvg >= 70 && scoreAvg <= 79){
            grade = "C";
        } else if (scoreAvg >= 60 && scoreAvg <= 69){
            grade = "D";
        } else {
            grade = "F";
        }
        return grade;
    }

    getAverage(HTML, CSS, JS) {
        return (HTML + CSS + JS) /3;
    }
       
    inputGrade() {
        const name = prompt("학생 이름 (그만하려면 '종료' 입력)");
        if (name === "종료") return false;

        const HTML = Number(prompt("HTML 점수"));
        const CSS = Number(prompt("CSS 점수"));
        const JS = Number(prompt("JS 점수"));

        const grade = this.getAverage(HTML, CSS, JS);
        const avg = this.getGrade(grade);

        this.setGrade(name, HTML, CSS, JS, grade, avg);
        return true;
    }

    printGrades() {
        console.log("===== 전체 학생 점수표 =====");
        this.students.forEach((student, index) => {
            console.log(
                `
                    학생 ${index + 1}번 
                    (${student.name}): 
                    HTML=${student.html}, 
                    CSS=${student.css}, 
                    JS=${student.js}, 
                    grade=${student.grade}, 
                    avg=${student.avg}
                `
            );
        });
    }

    inputUntilDone() {
        while (true) {
            const shouldContinue = this.inputGrade();
            if (!shouldContinue) {
                this.printGrades(); 
                break;
            }
        }
    }
}

const JuByeongHyeon = new Teacher();

JuByeongHyeon.inputUntilDone();