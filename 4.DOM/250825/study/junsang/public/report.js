// 1. **입력값 받기** / 2. **HTML 기본 구조 설정** / 3. **JS로 요소 만들기** / 4. **CSS 스타일을 반드시 적용하세요**
const input_num1 = Number(prompt("첫 번째 단을 선택해주세요 (예: 2)"));// 시작 번호
const input_num2 = Number(prompt("마지막 단을 선택해주세요 (예: 4)"));// 끝 번호
const gugudan_set = document.getElementById('gugudan');// <ul id="gugudan"> 영역 지정
// 잘못된 입력
const input_fail = function (message) {
    const h1 = document.createElement('h1');// h1 tag 만들기
    h1.textContent = message;// h1 tag에 내용 설정
    gugudan_set.appendChild(h1);// <h1> html에 추가
};
// 구구단 출력
function gugudan_print(start, end) {
    for (let i = start; i <= end; i++) {
        const li = document.createElement('li');// li tag 만들기
        li.className = 'gugudan_item';// <li class="gugudan-item"> 만들기
        for (let j = 1; j <= 9; j++) {
            const p = document.createElement('p');// p tag 만들기
            p.textContent = `${i} X ${j} = ${i * j}`;// p tag에 내용 설정
            li.appendChild(p);// <li><p></p><li> html에 추가
        }
        gugudan_set.appendChild(li);// <ul id="gugudan">의 자식 <li><p></p><li> html에 추가 
    }
}

if (input_num1 === 0 || input_num2 === 0) {
    alert('종료합니다');
    input_fail('잘못된 입력입니다!');
} else if (input_num1 > input_num2) {
    window.alert('종료합니다');// alert는 window객체의 메소드로 사용 가능
    input_fail('첫 번째 단은 마지막 단보다 클 수 없습니다!');
} else { gugudan_print(input_num1, input_num2); }