const Question_first=Number(prompt("안녕하세요.\n구구단 성적을 확인하고 싶다면? 1번\n다시 암기하고 싶다면 2번\n정확히 입력해주세요.( '1' 또는 '2' )"));

function report(html,css,javascript){
    const count= html+css+javascript;
    const average= count/3;
    let grade;
    if(average>=90) {
        grade="A";
    } else if(average>=80 && average<90) {
        grade="B";
    } else if(average>=70 && average<80) {
        grade="C";
    } else if(average>=60 && average<70) {
        grade="E";
    } else {
        grade="F";
        alert(`${grade}는 재수강 대상입니다.`);
    }
    alert(`당신의 성적은? ${grade}입니다.`);
    return { grade, average };
}

function gugudan(endNumber) {
    for(let i=1;i<=9;i+=1) {
        console.log(`${endNumber}x${i}=${endNumber*i}`);
    }
    console.log(`★★★이건 뽀너스★★★`);
    for(let i=1;i<=9;i+=1) {
        console.log(`---${i}단!---`);
        let count=0;
        while(count<9){
            count++;
            console.log(`${i}x${count}=${i*count}`);   
        }
    }
	for(let i=9;i>=1;i-=1) {
		console.log(`---${i}단!---`);
		let count=10;
		while(count>1){
			count--;
			console.log(`${i}x${count}=${i*count}`);   
		}
	}
    // 예외 처리야
}

if(Question_first === 1) {
    const score_html = Number(prompt("HTML 점수를 입력해주세요."));
    const score_css = Number(prompt("CSS 점수를 입력해주세요."));
    const score_javascript = Number(prompt("JAVASCRIPT 점수를 입력해주세요."));
    const result = report(score_html, score_css, score_javascript);
    console.log("평균:", result.average.toFixed(2), "/", "등급:", result.grade);    
}

// 2번
if(Question_first === 2) {
    const endNumber=Number(prompt("알고싶은 단의 숫자를 입력해주세요.(1~9)"));
    gugudan(endNumber);
}	
	


