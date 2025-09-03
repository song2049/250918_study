// clone은 중괄호 열고 person2를 다시 작성하였더라구요.

const person = {

}

// 원시 타입: 하나의 변수에 하나의 값
const a = 1;
const b = "2";
const c = null;
const d = undefined;
const bigint2 = 1234141241242n;
// 총 7가지의 원시 타입이 존재합니다.

// 참조 타입: 하나의 변수에 여러 가지 값을 담을 수 있는 구조(주소값을 저장)
// const array1 = [];
// 0xA1
const object1 = {
    width: "200px",
    height: "300px",
    // 0xA3
    tv: {
        samsung: "very well"
    }
};


const clone = { ...object1, tv: {...object1.tv}};

// 얘가 왜 false가 나오는지에 대해서 설명만 해주시면 되요.
console.log(clone.tv === object1.tv);