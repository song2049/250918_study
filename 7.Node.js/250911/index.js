const a = 1;
const b = "안녕하세요"
console.log(b);
console.log(a);

// setTimeout([콜백함수], [시간을정해줌])

// "비동기" 함수
setTimeout(() => {
    // 정해진 시간 후에 콜백 함수를 실행시키고 빠져나간다.
    console.log("제네시스");
})

setTimeout(() => {
    // 정해진 시간 후에 콜백 함수를 실행시키고 빠져나간다.
    console.log("아반떼");
}, 1000)

//curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash