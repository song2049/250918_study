function setLotto(array) {
    while(true) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if(result === -1) array.push(randomNumber);
        if(array.length === 6) break;        
    }
}
