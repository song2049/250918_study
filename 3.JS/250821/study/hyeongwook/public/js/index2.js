class Students{
    Scores = {
        scoreHtml : 0,
        scoreCss : 0,
        scoreJs : 0,
        avg : 0,
        grade : ""
    }
    setStudentInfo(){
        this.name = prompt("학생 이름을 입력하세요.");
    }
}

class testStudent extends Students{
    getGrade(scoreAvg){    
        let grade = "";
        if (scoreAvg >= 90){
            grade = "A";
        }else if (scoreAvg >= 80 && scoreAvg <= 89){
            grade = "B";
        }else if (scoreAvg >= 70 && scoreAvg <= 79){
            grade = "C";
        }else if (scoreAvg >= 60 && scoreAvg <= 69){
            grade = "D";
        }else {
            grade = "F";
        }
        return grade;
    }
    getAvg(scoreHtml, scoreCss, scoreJs){
        return (scoreHtml + scoreCss + scoreJs) /3;
    }
    setScore(){
        this.setStudentInfo();
        this.Scores.scoreHtml = Number(prompt("HTML 점수를 입력하세요"));
        this.Scores.scoreCss = Number(prompt("CSS 점수를 입력하세요"));
        this.Scores.scoreJs = Number(prompt("JS 점수를 입력하세요"));
        this.Scores.avg = this.getAvg(this.Scores.scoreHtml,this.Scores.scoreCss,this.Scores.scoreJs);
        this.Scores.grade = this.getGrade(this.Scores.avg);
    }
}

let i = 0;
const student = [new testStudent()];
while(true){
    // student[i] = new testStudent();
    
    if(confirm(`${i+1}번째 학생에 대해 입력하시겠습니까?`)){
        student.push(new testStudent());
        student[i].setScore();
        console.log(student[i]);
        i++
    }else{
        break; //더 이상 입력받지 않는다.
    } 
}
