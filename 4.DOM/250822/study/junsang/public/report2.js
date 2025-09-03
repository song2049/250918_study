const firstNumber = Number(prompt("첫 번째 단을 선택해주세요 (예: 2)"));
const secondNumber = Number(prompt("마지막 단을 선택해주세요 (예: 4)"));
const gugudan = document.getElementById('gugudan');

function renderFail() {
    if (isNaN(firstNumber) || isNaN(secondNumber)) return "숫자를 입력해주세요!";
    if (secondNumber === 0 || firstNumber === 0) return "0단은 없습니다";
    if (firstNumber > secondNumber) return "첫 번째 단은 마지막 단보다 클 수 없습니다!";
    return true;
}

function multiplicand(li, i) {
    for (let j = 1; j <= 9; j++) {
        const p = document.createElement("p");
        p.textContent = `${i} X ${j} = ${i * j}`;
        li.appendChild(p);
    }
}

function multiplier() {
    const result = renderFail();
    if (typeof result === "string") return result;
    for (let i = firstNumber; i <= secondNumber; i++) {
        const li = document.createElement("li");
        li.className = "gugudan_item";
        multiplicand(li, i);
        gugudan.appendChild(li);
    }
    return true;
}

function render() {
    const result = multiplier();
    if (typeof result === "string") return alert(result);
    alert("완료!");
}

render();