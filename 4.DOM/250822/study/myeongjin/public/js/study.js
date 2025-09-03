const startNum = Number(prompt("첫 번째 단 선택"));
const endNum = Number(prompt("마지막 단 선택"));

const gugudan = document.getElementById("gugudan");

function faild() {
    const p = document.createElement("p");
    if(startNum < endNum && startNum > 0 && endNum > 0) return true;
    if(startNum === 0 || endNum === 0) p.innerHTML = "빈 값입니다! 숫자를 입력해주세요";
    if(startNum > endNum) p.innerHTML = "첫 번째 단이, 두 번째 단보다 큽니다.";

    gugudan.appendChild(p)
    return false
}

function render() {
    const result = faild();
    // 실패했을 때, false가 반환될텐데 그걸 부정해줌 => false => true
    if(!result) return;
    for (let i = startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.classList.add("gugudan-item");
        //타이틀
        const title = document.createElement("h2");
        title.textContent = i + "단";
        li.appendChild(title);

        for (let j = 1; j <= 9; j++){
            const p = document.createElement("p");
            p.textContent = `${i} X ${j} = ${i * j}`;
            li.appendChild(p);
        }
        gugudan.appendChild(li);

        const note = document.createElement("p");
        note.textContent= i+'단 종료';
        li.appendChild(note);
    }
}

render();

























// let firstNumber = Number(prompt("첫 번째 숫자(1~9)"));
// let secondNumber = Number(prompt("두 번쨰 숫자(1~9)"));

// const dan = Number(prompt("몇 단을 보고 싶나요? (2~9):"));
//     console.log(`--- ${dan}단 ---`);
//     for (let i = 1; i <= 9; i++) {
//         console.log(`${dan} x ${i} = ${dan * i}`);
//     }

//  {
//     alert("1 또는 2만 입력해주세요!");
// }


// let firstNumber = Number(prompt("첫번째 단을 선택하시오"));
// let secondNumber = Number(prompt("마지막 단을 선택하시오"));


// const dan = 
// let firstNumber = Number(prompt("첫번째 단을 선택하시오"));
// for (const i=0; i<=9; i++){
//     for(const dan=2;dan<=9;dan++){
//         if(i==0){
//             document.write("[ "+dan+"단 ];");
//         }else{
//             document.write(dan+"*"+i+" = " + (dan*i) +"&nbsp;");
//         }
//     } document.write("<br>");
// }

// for(dan=1;dan<=9;dan++) {
//         document.write(` = ${dan} 단 = <br>`);
//         for(i=1;i<=9;i++) {
//             document.write(`${dan} * ${i} = ${dan*i} <br>`);
//         }
//         document.write(`<br>`);
//     }

    // const dan = Number(prompt("몇 단을 보고 싶나요? (2~9):"));
    // console.log(`--- ${dan}단 ---`);
//     for (let i = 1; i <= 9; i++) {
//         console.log(`${dan} x ${i} = ${dan * i}`);
//     }
// } else {
//     alert("1 또는 2만 입력해주세요!");
// }

// const firstNumber = prompt("첫 번째 숫자를 넣어주세요");
// const secondNumber = prompt("두 번째 숫자를 넣어주세요");
// const dan = Number(prompt("몇 단을 보고 싶나요? (2~9):"));
// const dan2 = Number(prompt("몇 단을 보고 싶나요? (2~9):"));


// for(let i = 2; i <= 9; i++){
//     document.write("<div>");
//     document.write("<li>" + dan + "단</li>");

//     for(let j = 1; j <= 9; j++){
//         document.write(dan + "X" + j + " = " + i*j + "<br>");
//     }
//     document.write("</div>");
// }

// const liArray = document.querySelector(".gugudan > ul");
// const newli = document.createElement("li");
