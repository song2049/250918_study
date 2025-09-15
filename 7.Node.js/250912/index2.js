// console.log(module);
// console.log(require);

/*
    module : {
        모듈로서 내보낼 것들을 속성과 값으로 정의한다.
        exports: {
        
        }
    }
*/
// 아니, index2.js만 실행시켰는데, 어떻게 add.js에 있는 파일들을 가져옴?
const {add, a, b, c, d, Comments} = require("./add.js");
const path = require("path"); //path 쓸려면 위에서 선언해야함 
const fs = require("fs"); 

console.log(add(1,3));
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const commentsCopy = Comments;

commentsCopy.userId = "song2049";

console.log(Comments.userId);

console.log(__filename); //현재 실행중인 파일의 전체 경로
console.log(__dirname); //현재 실행 중인 파일이 위치한 폴더 경로

// readFileSync();

const readmePath = path.join(__dirname, "./public/js/README.md");
const data = fs.readFileSync(readmePath, "utf8");

console.log(data);

console.log(process);
console.log(process.env.API.KEY);
console.log(process.pid);
console.log(process.platform);
console.log(process.arch);






