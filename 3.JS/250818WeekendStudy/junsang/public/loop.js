/*반복문
코드를 반복해서 실행

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


for([초기식; 조건식; 증감식;]){[코드내용]}
for(let i=1;i<10;i++){
    console.log(`${i}번째`);
}
*/

console.log(`구구단을 외자, 구구단을 외자!!!`);
for(let i=1;i<=9;i+=1){
    console.log(`---${i}단!---`);
    let cnt=0;
    while(cnt<9){
        cnt++;
        console.log(`${i}x${cnt}=${i*cnt}`);   
    }
    // for(let cnt=1;cnt<=9;cnt++){
    //     console.log(`${i}x${cnt}=${i*cnt}`);        
    // }    
}
