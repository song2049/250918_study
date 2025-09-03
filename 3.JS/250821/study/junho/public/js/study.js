class Gugudan {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    see() {
        for(let i = this.start; i <= this.end; i++) {
            console.log(`------${i}단 입니다-------`);
          for(let j = 1; j <= 9; j++) {
            console.log(`${i} X ${j} = ${i * j}`);
            }
        }
    }
}
const gugudan = new Gugudan(5, 9);
gugudan.see();
console.log(gugudan);