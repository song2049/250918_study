class Subject {
    constructor() {
        this.html = 0;
        this.css = 0;
        this.js = 0;
        this.all = 0;
        this.average = 0;
        this.info = {};
    }

    getSubject() {
        const { html, css, js, all, average } = this;
        this.info = { html, css , js, all, average };
        return this.info;
    }

    addSubject(html, css, js) {
        this.all = html + css + js;
    }

    averageSubject(all) {
        this.average = all / 3;
    }

    inputSubject() {
        this.html = Number(prompt("HTML"));
        this.css = Number(prompt("CSS"));
        this.js = Number(prompt("JS"));
        this.addSubject(this.html, this.css, this.js);
        this.averageSubject(this.all);
        console.log(this.getSubject());
    }
}
1
const subject = new Subject();
subject.inputSubject();


/*
    1. 목록을 보여줄 책임 / 끝
    2. 입력값을 저장할 책임 / 끝
    3. 더할 책임 / 끝
    4. 평균 구하는 책임 / 끝
*/