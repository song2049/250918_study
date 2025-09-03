const lotto = {
    baseNumber : [],
    linearSearch: function(array, target) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] === target) return i
        }
        return -1
    },
    setLotto: function(){
        while(true) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            const result = this.linearSearch(this.baseNumber, randomNumber);   
            if(result === -1) this.baseNumber.push(randomNumber);
            if(this.baseNumber.length === 6) break;
        }
    },
}

lotto.setLotto();

console.log(lotto.baseNumber);