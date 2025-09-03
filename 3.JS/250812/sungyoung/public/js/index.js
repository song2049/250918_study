// 자바스크립트랑 많이 친해졌는가
// 많이 담긴게 많아.
// 문법에 대해서도 살짝 엄격함.
// 2009(ES5)
// 2015(ES6)
// var, let, const

let age = 30;
console.log(age);

let nextAge = age + 1;
console.log(nextAge);

let message = "내년 나이는" + nextAge + "살 입니다.";
console.log(message);

age = 19980523;
console.log(age);

const myName = "병현님이 상하차 하세요^^";

message = "제 출생년도는" + age + "입니다." + "따라서 제 내년의 나이는" + nextAge + "입니다.";
console.log(myName);

let phoneNumb = 1092130961;
console.log(phoneNumb);

message = "제 전화번호는" + "0" + phoneNumb + "입니다.";
console.log(message);

message = "제 이름은" + myName + "이며 출생년도는" + age + "입니다. 내년의 나이는" + nextAge + "가 됩니다. 핸드폰 번호는" + "0" + phoneNumb + "입니다.";
