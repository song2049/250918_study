/*
    1. 숫자를 순서가 보장된 데이터 구조에 넣는다 => 배열
    2. 중복 체크를 한다. => 메서드
    3. 난수를 뽑아서 배열에 집어넣는다. => 메서드
*/
class Lotto {
    constructor() {
        this.basenumber = []
    }
    // 로또는 중복 체크할 수 있는 책임이 있다.
    linearSearch(target) {
        for(let i = 0; i < this.basenumber.length; i++) {
            if(this.basenumber[i] === target) return i;
        }
        return -1;
    }
    // 로또는 중복 체크를 진행 후, 6개의 숫자를 만들 책임이 있다.
    setLotto() {
        while(true) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            const result = this.linearSearch(randomNumber);
            if(result === -1) this.basenumber.push(randomNumber);
            if(this.basenumber.length === 6) break;
        }
    }
    // 로또는 오름차순으로 정리할 책임이 있다.
    accending() {
        // [4, 3, 2, 5]
        for(let i = 0; i < this.basenumber.length; i++) {
            for(let j = i + 1; j < this.basenumber.length; j++) {
                // temp
                // [4, 3]
                if(this.basenumber[i] > this.basenumber[j]) {
                    let temp;
                    temp = this.basenumber[i];
                    this.basenumber[i] = this.basenumber[j];
                    this.basenumber[j] = temp;
                }
            }
        }
    }
}

// 로또라는 붕어빵 틀. 그리고 그 틀에 밀가루를 부어서 찍어낼 수 있는 인스턴스 객체
const lotto = new Lotto();
lotto.setLotto();
lotto.accending();
console.log(lotto.basenumber);
