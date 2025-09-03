
// 생성자 함수: 어떤 객체를 만든 생성자 함수
// 쉽게: 객체를 만들 때 쉽게 만들려고 틀 만듦
// __proto__: 객체가 참조하는 부모 객체
// prototype: 생성자 함수가 나중에 만들 객체들에게 물려줄 공통 속성들

function sixClassStudent(name) {
    this.name = name;
    this.sayHi = function() {
        return `${this.name}님: 교수님 안녕하세요!`
    }
}

sixClassStudent.prototype.age = 0;
sixClassStudent.prototype.sayAge = function() {
    return `${this.name}님: 제 나이는 ${this.age}살 입니다.`
}

// student1 => 인스턴스 객체, (지금 코드로 봤을 때)생성자 함수 => new sixClassStudent("성영")
const student1 = new sixClassStudent("성영");
console.log(student1.sayAge());


const student2 = new sixClassStudent("준호");
console.log(student2.sayAge());


student2.name = "명진"
console.log(student2.sayHi());

function test() {
    this.name = "하하"
}










// const student2 = new sixClassStudent("준호");
// const student3 = new sixClassStudent("형욱");
// const student4 = new sixClassStudent("준상");
// const student5 = new sixClassStudent("명진");

// Object.protoType은 constructor(생성자) 라는 속성을 가지고 있음.