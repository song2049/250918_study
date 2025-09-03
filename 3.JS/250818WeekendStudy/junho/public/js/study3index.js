let call = String(prompt(`어떤 기능을 원하실까요? "평균" 또는 "구구단"중에 하나만 정확히 입력해주세요`))

if(call === "평균") {
    function a (html, css, javascript) {
      let add = html + css + javascript;
      let average = add / 3;
      let score;
      if (average >=90) {
         score = "A";
      } else if(average >= 80 && average <= 89) {
         score = "B";
      } else if (average >= 70 && average <= 79) {
         score = "C";  
      } else if (average >= 60 && average <= 69) {
         score = "D";
      } else if (average <=59) {
         score = "F";
      }
      alert(`${score}`)
      return {average, score}
    }
    let one = Number(prompt(`html 점수를 입력하세요`));
    let two = Number(prompt(`css 점수를 입력하세요`));
    let three = Number(prompt(`javascript 점수를 입력하세요`));
    let result = a(one, two, three);
    console.log(result.average, result.score);
}


if (call === "구구단") {
    let start = Number(prompt(`시작 단을 (1~9) 선택하세요`))
    let end = Number(prompt(`끝 단을 (1~9) 선택하세요`))
        for (let p = start; p <= end; p++) {
            console.log(`-------${p}단-------`);
            for (let i = 1; i <= 9; i++) {
                console.log(`${p} X ${i} = ${p * i}`);
        }
     }  
}
