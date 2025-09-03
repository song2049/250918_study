class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 기본적으로 function 예약어
    sayHi() {
        return `${this.name}: 안녕하세요 교수님!`
    }
}

const student1 = new Student("준호", 28);

console.log(student1.sayHi());

class canEmployedPerson extends Student {
    constructor(completePaper, name, age) {
        super(name, age)
        this.completePaper = completePaper;
    }
}

const student3 = new canEmployedPerson("수료함", "성영", 28);
console.log(student3.name);
