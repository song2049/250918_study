// 함수는 값이여

function say(say2) {
    console.log(say2());
    return "say";
}

const say2 = () => {
    return "say2";
}

say(say2);