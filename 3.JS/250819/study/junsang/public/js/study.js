// 미리 정의된 **5명의 학생 객체** 
const students = {
    student1: { name: "준호" },
    student2: { name: "성영" },
    student3: { name: "형욱" },
    student4: { name: "준상" },
    student5: { name: "명진" },
};

//**학생 성함**을 `prompt`로 입력받는다. (허용된 이름: `준호`, `성영`, `형욱`, `준상`, `명진`)
const input_Name = prompt(" **학생 성함을 입력하세요**\n(`준호`, `성영`, `형욱`, `준상`, `명진`)");

// 이어서 **세 과목 점수**를 `prompt`로 각각 입력받는다. (HTML, CSS, JS)
const score_HTML = Number(prompt("HTML 점수를 입력하세요:"));
const score_CSS = Number(prompt("CSS 점수를 입력하세요:"));
const score_JAVASCRIPT = Number(prompt("JS 점수를 입력하세요:"));

// 미리 정의된 **5명의 학생 객체** 중 **이름이 일치하는 학생**을 찾는다. (찾는다라는 기능을 구현한다.)
if (students.student1.name === input_Name || students.student2.name === input_Name || students.student3.name === input_Name || students.student4.name === input_Name || students.student5.name === input_Name) {
    // 4. 찾으면, 그 학생 객체에 `scores` 속성(내부에 `html`, `css`, `js`)을 **할당/갱신**한다.    
    switch(input_Name){
        case "준호":
            students.student1.scores = {
            html: score_HTML,
            css: score_CSS,
            js: score_JAVASCRIPT,
            };
            console.log(students.student1.scores);
            break;
        case "성영":
            students.student2.scores = {
            html: score_HTML,
            css: score_CSS,
            js: score_JAVASCRIPT,
            };
            console.log(students.student2.scores);
            break;
        case "형욱":
            students.student3.scores = {
            html: score_HTML,
            css: score_CSS,
            js: score_JAVASCRIPT,
            };
            console.log(students.student3.scores);
            break;
        case "준상":
            students.student4.scores = {
            html: score_HTML,
            css: score_CSS,
            js: score_JAVASCRIPT,
            };
            console.log(students.student4.scores);
            break;
        case "명진":
            students.student5.scores = {
            html: score_HTML,
            css: score_CSS,
            js: score_JAVASCRIPT,
            };
            console.log(students.student5.scores);
            break;
    }
    console.log(students);    
    // 5. 해당 학생의 **평균 점수**를 구하고 (기능 구현) **등급**을 매겨 출력한다. (console.log로 출력)
    const count = score_HTML + score_CSS + score_JAVASCRIPT
    const average = count / 3;
    let grade;

    if(average>=90){
        grade="A";
    }
    else if(average>=80 && average<90){
        grade="B";
    }
    else if(average>=70 && average<80){
        grade="C";
    }
    else if(average>=60 && average<70){
        grade="E";
    }
    else{
        grade="F";
    }

    console.log(`학생: ${input_Name}`);
    console.log(`HTML: ${score_HTML}, CSS: ${score_CSS}, JS: ${score_JAVASCRIPT}`);
    console.log(`평균 점수: ${average.toFixed(2)}`);
    console.log(`등급: ${grade}`);
}
else{
    console.log("이름 없음");
}

/*## 필수 규칙
- **배열 금지**(학생 목록을 배열로 두지 말 것)
- **객체만으로 데이터 구성**, `console.log()`로 결과 확인
- `선언`과 `호출`을 명확히 지킵니다.*/