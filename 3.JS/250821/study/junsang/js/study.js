while (true) {
    const students = [`ho`, `yeong`, `uk`, `sang`, `jin`]

    class Student {
        constructor() {
            this.name = prompt(" **이름을 입력하세요**\n( ho, yeong, uk, sang, jin )\n종료를 원하면 0번을 입력하세요");
            if (this.name === "0") {
                this.exit = true;
                return;
            }
            this.html = Number(prompt("HTML 점수를 입력하세요:"));
            this.css = Number(prompt("CSS 점수를 입력하세요:"));
            this.javscript = Number(prompt("JS 점수를 입력하세요:"));
        }
        get_grade() {
            this.average = (this.html + this.css + this.javscript) / 3;
            if (this.average >= 90)  this.grade = "A"; 
            else if (this.average >= 80)  this.grade = "B"; 
            else if (this.average >= 70)  this.grade = "C"; 
            else if (this.average >= 60)  this.grade = "E"; 
            else  this.grade = "F";
        }
        print() {
            if (!students.includes(this.name)) {
                console.log("학생 정보가 존재하지 않습니다.");
                return;
            }
            console.log(`이름: ${this.name}`);
            console.log(`HTML: ${this.html}, CSS: ${this.css}, JS: ${this.javscript}`);
            console.log(`평균 점수: ${this.average.toFixed(2)}`);
            console.log(`등급: ${this.grade}`);
        }

    }
    const student_new = new Student();

    student_new.get_grade();
    student_new.print();

    if (student_new.exit) {
        alert("bye");
        break;
    }
}