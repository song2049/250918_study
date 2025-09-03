/**
 * 1. 숫자를 순서가 보장된 데이터 구조에 넣는다.
 * 2. 중복 체크를 한다. => 메서드
 * 3. 난수를 뽑아서 배열에 집어 넣는다. => 메서드
 */
class Lotto{
    // baseNumber; ES7
    constructor(){
        this.baseNumber = [];
    }
    linearSearch(target){
        // 로또는 중복 체크할 책임이 있다.
        for (let i = 0; i < this.baseNumber.length; i++) {
            if(this.baseNumber[i] === target) {
                //해당 숫자가 있을 때, 해당 인덱스를 반환한다.
                return i;
            }
        }
        // 대부분의 언어에서 유효하지 않은 인덱스를 뜻할 때 -1을 활용한다.
        // false나 null을 사용해도 되겠지만 인덱스를 리턴하는 경우에 관용적으로 -1을 사용하는 편
        return -1;
            
    }

    // 로또는 중복 체크를 진행 후, 6개의 숫자를 만들 책임이 있다.
    setLotto(){    
        while(true){
            const randomNumber = Math.floor(Math.random() * 45 ) + 1;
            const result = this.linearSearch(randomNumber);
            if (result === -1) this.baseNumber.push(randomNumber);
            if(this.baseNumber.length === 6) break;
        }
        
    }
    // 로또는 오름차순으로 정리할 책임이 있다.
    accending(){
        //[4,3,2,5]
        for (let i = 0; i < this.baseNumber.length; i++) {
            for (let j = 0; j < this.baseNumber.length; j++) {
                // [4, 3]
                if (this.baseNumber[i] < this.baseNumber[j]){
                    let temp;
                    temp = this.baseNumber[i];
                    this.baseNumber[i] = this.baseNumber[j];
                    this.baseNumber[j] = temp;
                }
            }
        }
        

    }
}

// 로또라는 붕어빵 틀. 그리고 그 틀에 밀가루를 부어서 찍어낼 수 있는 인스턴스 객체
const lotto = new Lotto(); //클래스 선언
lotto.setLotto()
lotto.accending();  //오름차순 정렬
console.log(lotto.baseNumber); //확인