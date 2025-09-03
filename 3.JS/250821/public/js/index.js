// function sayHi() {
//     console.log("안녕하세요 교수님!");
// }

const sixClassStudent = {
    name: "준호",
    age: 28,
    sayHi: function() {
        console.log(`${this.name}: 교수님 안녕하세요!`);
    },
}

const sixClassStudent2 = {
    name: "성영",
    age: 28,
    sayHi: function() {
        console.log(`${this.name}: 교수님 안녕하세요!`);
    },
}

sixClassStudent.sayHi();

// console.log(sixClassStudent.hasOwnProperty("name"));
// console.log("name" in sixClassStudent);

// console.log(sixClassStudent.__proto__ === Object.prototype);