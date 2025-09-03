const gugudanFirst = Number(prompt("첫번째 단을 입력해주세요"))
const gugudansecond= Number(prompt("두번째 단을 입력해주세요"))

function creatGugudan(gugudanFirst, gugudansecond) {
    const gugudan = document.querySelector("#gugudan");
    const liArray = document.createElement(`ul`)
    gugudan.appendChild(liArray);
    
    if(gugudanFirst > gugudansecond) {
        let temp
        temp = gugudanFirst;
        gugudanFirst = gugudansecond;
        gugudansecond = temp;
    }

    for(let i = gugudanFirst; i<= gugudansecond; i++) {

        if(gugudanFirst+gugudansecond <= 0) {continue;}
        const newUi = document.createElement("li");
        newUi.className = `gugudan-list${i}`
        liArray.appendChild(newUi);

        for(let j = 1; j < 10; j++) {
            const pdan = document.createElement(`p`);
            pdan.textContent = `${i} x ${j} = ${i*j}`;
            newUi.appendChild(pdan);
        }
    }
}

creatGugudan(gugudanFirst,gugudansecond);