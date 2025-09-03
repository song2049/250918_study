for (let i = 1; i <= 9; i++) {
    //구구단
    for (let j = 1; j <= 9; j++) {
        if(j == 1){
            console.log(`---${i}단!---`);    
        }
        console.log(`${i} X ${j} = `+ i*j  );
        if(j == 9){
            console.log(``);    
        }
    }
}