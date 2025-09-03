let first = prompt("준호, 명진, 형욱, 성영, 준상");

const student0 ={
    name: "준호",
    scores:{
        html: Number(prompt("html를 입력해주세요")),
        css: Number(prompt("css를 입력해주세요")),
        js: Number(prompt("js를 입력해주세요"))
    }
}

const student1 ={
    name: "명진",
    scores:{
        html: 60,
        css: 80,
        js: 50
    }
}

const student2 ={
    name: "형욱",
    scores:{
        html: 70,
        css: 60,
        js: 100
    }
}

const student3 ={
    name: "성영",
    scores:{
        html: 100,
        css: 100,
        js: 60
    }
}

const student4 ={
    name: "준상",
    scores:{
        html: 70,
        css: 70,
        js: 80
    }
}

if(first === student0.name) {
    console.log(student0.scores.html);
    
    let average = (student0.scores.html + student0.scores.css + student0.scores.js) / 3;
    let grade;
    if(average >= 90){
        grade = "A"
    }else if(average >= 80 && average <= 89 ){
        grade = "B"
    }else if(average >= 70 && average <= 79 ){
        grade = "C"
    }else if(average >= 60 && average <= 69 ){
        grade = "D"
    }else if(average >= 59 ){
        grade = "F"
    }
    alert (`${grade}`)
}

if(first === student1.name) {
    let average = (student1.scores.html + student1.scores.css + student1.scores.js) / 3;
    let grade;
    if(average >= 90){
        grade = "A"
    }else if(average >= 80 && average <= 89 ){
        grade = "B"
    }else if(average >= 70 && average <= 79 ){
        grade = "C"
    }else if(average >= 60 && average <= 69 ){
        grade = "D"
    }else if(average >= 59 ){
        grade = "F"
    }
    alert (`${grade}`)
    console.log(average, grade);
}

if(first === student2.name) {
    let average = (student2.scores.html + student2.scores.css + student2.scores.js) / 3;
    let grade;
    if(average >= 90){
        grade = "A"
    }else if(average >= 80 && average <= 89 ){
        grade = "B"
    }else if(average >= 70 && average <= 79 ){
        grade = "C"
    }else if(average >= 60 && average <= 69 ){
        grade = "D"
    }else if(average >= 59 ){
        grade = "F"
    }
    alert (`${grade}`)
    console.log(average, grade);
}

if(first === student3.name) {
    let average = (student3.scores.html + student3.scores.css + student3.scores.js) / 3;
    let grade;
    if(average >= 90){
        grade = "A"
    }else if(average >= 80 && average <= 89 ){
        grade = "B"
    }else if(average >= 70 && average <= 79 ){
        grade = "C"
    }else if(average >= 60 && average <= 69 ){
        grade = "D"
    }else if(average >= 59 ){
        grade = "F"
    }
    alert (`${grade}`)
    console.log(average, grade);
}

if(first === student4.name) {
    let average = (student4.scores.html + student4.scores.css + student4.scores.js) / 3;
    let grade;
    if(average >= 90){
        grade = "A"
    }else if(average >= 80 && average <= 89 ){
        grade = "B"
    }else if(average >= 70 && average <= 79 ){
        grade = "C"
    }else if(average >= 60 && average <= 69 ){
        grade = "D"
    }else if(average >= 59 ){
        grade = "F"
    }
    alert (`${grade}`)
    console.log(average, grade);
}