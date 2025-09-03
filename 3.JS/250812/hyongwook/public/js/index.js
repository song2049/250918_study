// 1. 새로운 파일 만들기 
//  index.html, public/js/index.js (현재파일) 생성완료
console.log("1. 새로운 파일 만들기 : 완료");
console.log("index.html, public/js/index.js (현재파일) 생성완료");
console.log("");

//2. 변수 만들고 값 담기
let v_name = "최형욱"; //name은 시스템 예약어 이므로 name -> v_name으로 변경함
let age = 10;

console.log("2. 변수 만들고 값 담기");
console.log("v_name="+v_name);
console.log("age="+age);
console.log("");

//3. 값 연산하기
let nextAge = age + 1;
let message = "내년 나이는" + nextAge + "살 입니다.";

console.log("3. 값 연산하기 : 완료");
console.log("nextAge="+nextAge);
console.log("message="+message);
console.log("");

//4. 값 바꾸기
age = 20;
nextAge = age + 1;

console.log("4. 값 바꾸기 : 완료");
console.log("age="+age);
console.log("nextAge="+nextAge);
console.log("");

//5. 값 확인하기
console.log("5. 값 확인하기 (최종변수값)");
console.log("v_name="+v_name);
console.log("age="+age);
console.log("nextAge="+nextAge);
console.log("message="+ message);
message = "내년 나이는"+ nextAge + "살 입니다.";
console.log("(message 변수도 재할당 후) message="+ message);



