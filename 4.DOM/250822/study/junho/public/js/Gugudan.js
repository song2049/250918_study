const gugudan = document.querySelector("#gugudan-Game")
const start =Number(prompt("시작 단을 입력하세요"))
const finish = Number(prompt("마지막 단을 입력하세요"))

for(let i = start; i <= finish; i++) {
    const gameTitle = document.createElement("li")
    gameTitle.innerHTML = `---${i}단---`
    gugudan.appendChild(gameTitle);

    for(let j = 1; j <= 9; j++) {
        const gameItem = document.createElement("p")
        gameItem.innerHTML = `${i} X ${j} = ${i * j}`
        gameTitle.appendChild(gameItem)
    }
}