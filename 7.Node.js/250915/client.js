const net = require("net");

//net.connet([{대기중인 서버 포트번호}], [콜백함수])
const client = net.connect({port: 8080}, () => {
    console.log("서버에 연결되었습니다.");
    client.write("client: 서버 오픈됨")
        
})