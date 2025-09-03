class Gugudan {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.result = "";
        this.begin = "종료";
    }
    setGugudan(start, end) {
        this.result = "";
        for(let i = start; i <= end; i++) {
            this.result += `------${i}단 입니다------- \n`
          for(let j = 1; j <= 9; j++) {
                this.result += `${i} X ${j} = ${i * j} \n`;
            }
        }
    }
    getGugudan() {
        return this.result
    }
    startGugudan() {
        while(true) {
            this.begin = prompt("종료 또는 시작이라고 말씀해주세요.");
            if(this.begin === "종료") { break; }
            this.start = Number(prompt("첫 번째 단을 입력하세요"));
            this.end = Number(prompt("두 번째 단을 입력하세요"));
            this.setGugudan(this.start, this.end);
            alert(this.getGugudan());
        }
    }
}
const gugudan = new Gugudan();
gugudan.startGugudan();

/*
    1. 3개의 과목을 지정한다
    2. 세 과목을 평균을 구한다
    3. 평균 점수의 범위를 지정해 등급을 매긴다

    ---
    
    1. 초기값으로 먼저 구구단을 구하는 책임 / 끝
    2. 입력값을 제공하는 책임 / 끝
    3. 제공된 입력값으로 구구단을 연산하는 책임 / 끝
    4. 연산한 결과값을 저장하는 책임 / 끝
    5. 저장한 값을 보여주는 책임 / 끝

    => 구구단을 구해서 화면으로 보여주는 책임.
*/

// class Subject {
//     constructor() {
//         this.korean = 70;
//         this.english = 60;
//         this.math = 50;
//         this.average = (this.korean +  this.english + this.math) / 3;
//     }
//     grade() {
//         if(this.average >= 90) {
//             return "A"
//         }else if(this.average >= 80) {
//             return "B"
//         }else if(this.average >= 70) {
//             return "C"
//         }else if(this.average >= 60) {
//             return "D"
//         }else(this.average <= 59); return "F"
//     } 
// }

// const subject = new Subject();
// subject.grade();
// console.log(subject.average);
// console.log(subject.grade());

/*
    1. 3개의 과목을 지정한다
    2. 세 과목을 평균을 구한다
*/


// class Subject {
//     constructor(history, english, math) {
//         this.history = history;
//         this.english = english;
//         this.math = math;
//     }
//     add() {
//         return this.scores + this.english + this.history;
//     }
//     average() {
//         return this.add() / 3;
//     }
// }
// const subject = new Subject(70, 60, 90);
// console.log(subject);