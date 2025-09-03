function gugudan(fisrtdan, seconddan) {
    if (fisrtdan > seconddan) {
        let temp
        temp = fisrtdan;
        fisrtdan = seconddan;
        seconddan = temp;
    }

    for(let i = fisrtdan; i <= seconddan; i++) {
    console.log ("---" + i + "단" + "---")
    for (let p = 1; p < 10; p++) {
        console.log (i + "x" + p + "=" + (i*p));
        }
    }    
}