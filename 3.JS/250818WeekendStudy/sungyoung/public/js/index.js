const question1 = prompt("`평균` 기능을 사용하실 것인지 `구구단`을 사용할 것 인지 적어주시길 바랍니다.");

if (question1 == "평균") {
    const test1 = Number(prompt("html의 점수를 적으시오"));
    const test2 = Number(prompt("css의 점수를 적으시오"));
    const test3 = Number(prompt("js의 점수를 적으시오"));
    average(test1, test2, test3);
} else if (question1 == "구구단") {
    const fisrtNumb = Number(prompt("첫 번째 단을 고르세요 (1~9)"));
    const secondNumb = Number(prompt("두 번째 단을 고르세요 (1~9)"));
    gugudan(fisrtNumb, secondNumb);
} else {
    // 예외처리 너무 좋습니다.
    alert ("`평균` 또는 `구구단`만 입력 해주시길 바랍니다.")
}