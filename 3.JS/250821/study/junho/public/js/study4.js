class Student {
    constructor(name, html, css, js, all, average) {
        this.name = name;
        this.html = html;
        this.css = css;
        this.js = js;
        this.all = all;
        this.average = average;
    }
}

class Teacher {

    constructor() {
        this.students = [];
        this.begin = "종료";
    }

    setStudent() {
        const student = new Student(
            this.name,
            this.html,
            this.css,
            this.js,
            this.all,
            this.average
        )
        this.students.push(student);
    }

    getStudent() {
        return this.students;
    }

    addSubject(html, css, js) {
        this.all = html + css + js;
    }

    averageSubject(all) {
        this.average = all / 3;
    }

    inputStudent() {
        while (true) {
            this.begin = prompt("시작 혹은 종료");
            if(this.begin === "종료") { 
                console.log(this.getStudent());         
                break; 
            }
            this.name = prompt("학생의 이름");
            this.html = Number(prompt("HTML"));
            this.css = Number(prompt("CSS"));
            this.js = Number(prompt("JS"));

            this.addSubject(this.html, this.css, this.js);
            this.averageSubject(this.all);
            this.setStudent()
        }
    }
}
1
const juByeongHyeon = new Teacher();
juByeongHyeon.inputStudent();