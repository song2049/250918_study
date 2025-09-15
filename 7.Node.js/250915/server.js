const net = require(`net`);
const fs = require("fs");

// net.createServer([콜백함수])
// net.createServer(([클라이언트매개변수]) => {})

const server = net.createServer((client)=> {
    // 여기서 client는 접속한 상대방 즉 요청을 보낸 주체를 나타내는 객체
    client.write("Hello Client");
})
// server.listen([포트번호],[콜백함수])
server.listen(8080, () => {
    console.log("서버가 열림");
    
})
