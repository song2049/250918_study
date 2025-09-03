// 리터럴 => 명확하게 데이터 타입이 있고, 데이터 값이 있는데 나열할 수 있다
// 심볼, new Date();

const string1 = "주병현";

// 리터럴을 기준으로 반복이 가능한! 애들을 이터러블

// 이터러블

// 스프레드: 이터러블들을 개별 요소로 분리할 수 있다.

const a = {
    width: "200px",
    height: "300px",
    ab: {
        teaching: "very well"
    }
}

const b = { ...a, ab: { ...a.ab } };

console.log( a === b );

b.width = "500px";
b.ab.teaching = "so so";

console.log(b);