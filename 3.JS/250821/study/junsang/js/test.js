/*
숫자를 순서가 보장된 데이터에 넣는다> 배열
중복체크> 메소드
난수를 뽑아서 배열에 넣는다> 메소드
*/
class Lotto {
    constructor() {
        this.base = []
    }
    //중복체크
    linearSearch(target) {
        for (let i = 0; i < this.base.length; i++) {
            if (this.base[i] === target) { return i; }
        }
        return -1;
    }
    //중복체크 후 6개 숫자
    lotto_set() {
        while (true) {
            const random = Math.floor(Math.random() * 45) + 1;
            const result = this.linearSearch(random);
            if (result === -1) this.base.push(random);
            if (this.base.length === 6) break;
        }
    }
    //정렬: 오름차순
    lotto_sort() {
        for (let i = 0; i < this.base.length; i++) {
            for (let j = i + 1; j < this.base.length; j++) {
                if (this.base[i] > this.base[j]) {
                    let tmp = this.base[i];
                    this.base[i] = this.base[j];
                    this.base[j] = tmp;
                }

            }
        }
        // this.base[0] > this.base[1];
    }
}
//const lotto > 계속 만드는 작업
const lotto1 = new Lotto();
lotto1.lotto_set();
lotto1.lotto_sort();
console.log(lotto1.base);

const lotto2 = new Lotto();
lotto2.lotto_set();
console.log(lotto2.base);

// console.log(lotto.linearSearch(0));