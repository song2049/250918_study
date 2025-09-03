var score_html= 50
var score_cs=50
var score_js=50;
const cnt= score_html+score_cs+score_js;
const ave= cnt/3;
let grade;

if(ave>=90){
    grade="A";
}
else if(ave>=80 && ave<90){
    grade="B";
}
else if(ave>=70 && ave<80){
    grade="C";
}
else if(ave>=60 && ave<70){
    grade="E";
}
else{
    grade="F";
}

console.log("평균:", ave.toFixed(2), "/", "등급:", grade);