const net = require(`net`);
const fs = require("fs");

//DB라고 가정한 것
const users = [
    {
        userName: "mj",
        age: 30
    },
    {
        userName: "sw",
        age: 10
    }
]
const serverSideRendering = (url) => {
    switch (url) {
        case "/":
            return `<h1>메인 페이지이지라</h1>`;
        case "/users":
            // const val = users;
            // return JSON.stringify(users, null, 2);
            return `
            <html>
            <head><meta charset="UTF-8"><title>Users</title></head>
            <body>
                <h1>사용자 목록</h1>
                <ol>
                ${users.map(u => `<li>${u.userName} (${u.age}세)</li>`).join("")}
                </ol>
            </body>
            </html>
            `;
        default:
            return `<h1>404 Not Found</h1>`;
    }
}
// net.createServer([콜백함수])
// net.createServer(([클라이언트매개변수]) => {})
const server = net.createServer((client) => {
    // 여기서 client는 접속한 상대방 즉 요청을 보낸 주체를 나타내는 객체
    // client.write("Hello Client");

    // 클라이언트를 서버로 받아오기, client.on([이벤트],[콜백함수])
    client.on("data", (request) => {
        // GET /HTTP/1.1
        // GET /users HTTP/1.1
        // console.log(request.toString());
        // request.toString().split(" ")
        //const method = request.toString().split(" ")[0];
        //const url = request.toString().split(" ")[1];
        const [method, url] = request.toString().split(" ") //구조분해할당으로 위에꺼 가져옴
        // [GET","/users","HTTP/1.1] 공백을 ,로 가져옴

        // console.log(request.toString());
        // 요청만 받고 끝맺음이 아예 없음. 하나의 요청엔 하나의 응답있어야함, end추가
        // client.end();
        // const body = `<h1>hi, from raw TCP Server!</h1>`;
        const body = serverSideRendering(url);
        const contentType = url === "/uers"
            ? "application/json; charset=UTF-8" ///users는 JSON
            : "text/html; charset=UTF-8"; // 그외 HTML
        const header =
            `HTTP/1.1 200 OK\r\n` + //헤더 영역
            `Content-Type: ${contentType}\r\n` +
            `Content-Length: ${Buffer.byteLength(body)}\r\n` +
            `\r\n`;
        const response = header + body;

        client.write(response);
        client.end();
    });
})
// server.listen([포트번호],[콜백함수])
server.listen(8080, () => {
    console.log("서버가 열림");
})
