class Gradesurvey {
    constructor() {
        this.student = prompt("학생의 이름을 입력해주세요. 학생 리스트가 궁금한 경우 `리스트`를 입력바랍니다.");
        this.hmtl = {};
        this.css = {};
        this.js = {};
        this.professor = {};
    }
    
    // 리스트에 있는 학생인지 확인해주는 책임
    findStudent () {
        switch (this.student) {
            case "성영":
                return this.student;

            case "준호":
                return this.student;

            case "명진":
                return this.student;

            case "준상":
                return this.student;

            case "형욱":
                return this.student;
            
            case "주병현":
                return this.professor;

            case "리스트":
                return "list"

            default: false;
        }
    }
    // 학생이 있다면 프롬프트를 시험결과를 입력 받고 띄워주는 책임
    stageLogin() {
        const result = this.findStudent();
        if(!result) {
            alert("해당 학생은 존재하지 않습니다. 리스트를 확인하세요");
        } else if (result === this.student) {
            const htmlSocre = Number(prompt("html 점수를 입력하시라"));
            const cssSocre = Number(prompt("css 점수를 입력하시라"));
            const jsSocre = Number(prompt("js 점수를 입력하시라"));
            this.hmtl = htmlSocre;
            this.css = cssSocre;
            this.js = jsSocre;
            const finalResult = studentInfo.average();
            console.log(finalResult);

        } else if (result === "list") {
            alert("현재 학생 리스트는 ` 성영 ` , ` 준호 `, ` 명진 ` ,` 준상 ` ,` 형욱 ` 입니다.")

        } else if (result === this.professor) {
            alert("현재 교강사 분들은 이용이 어려우신 점 양해 바랍니다.")
        }
    }
    
    // 학생이 입력한 점수를 평균에 따라 등급을 매김
    average () {
        let averageScore = Math.floor((this.hmtl + this.css + this.js) / 3);
        if (averageScore >= 90) {
        return {averageScore, rating: "A"}
        } else if (averageScore >= 80) {
        return {averageScore, rating: "B"}
        } else if (averageScore >= 70) {
        return {averageScore, rating: "C"}
        } else if (averageScore >= 60) {
        return {averageScore, rating: "D"}
        } else {
        return {averageScore, rating: "F"}
        }
    }
}

const studentInfo = new Gradesurvey();

studentInfo.stageLogin();