# Node.js>자바스크립트 실행 환경
- 내장객체, 외장객체, 내장모듈, 외장모듈

# 내장모듈
- fs, path, os, process
- 여태까지 실행환경
# 다음단계
- 서버 만들기
- 내장모듈> net모듈
- 브라우저> 코드를 해석해서 보여주는 도구 / http 요청을 보낼 수 있는 프로그램
ㄴ net 모듈은 브라우저 없이도 직접 클라이언트, 서버 역할 모듈을 만들고 TCP 통신을 구현할 수 있게 만들어진 모듈

## 내일 tcp, osi7계층 교육예정

### 현실적 비유

6강의실로 예를 들면
6강의실에 제가 들어온 시점부터 서버가 열렸다 가정함

여러분들이

오전 : GET /education
오후 : GET /feedback?student_id="myeongjin"

이 논리적 흐름을 명확하게 서버 입장에서 요청을 받고 응답 해주고
"끊어"줘야 함.
### 개발자 도구 => 네트워크 탭에서
1. 일반
이번 요청 및 응답에 대한 요약 정보이다.
- 요청 URL : http://localhost:8080/
- 요청 메서드 : GET
- 응답 상태 코드 : 200 OK ...등등
2. 응답헤더

핵심
우리가 직접 작성한 HTTP 응답 문자열이 이 영역에 들어감

```sh
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 31
```

** 요청을 보내는 주체 => 지금은 브라우저라면, 브라우저는헤더를 먼저 보고 판단한다.**
- 응답 정상? ㅇㅋ
- 해당 컨텐츠의 타입은? HTML임?ㅇㅋ 브라우저에 화면으로 출력할게
- 해당 컨텐츠의 길이는 얼마까지? 31? ㅇㅋ 인지할게

3. 요청헤더

브라우저가 서버에게 요청을 보낼 때 함께 넣은 정보

- **Host**: localhost:8080 => 너 요청 누구한테 보내는거냐? 로컬호스트8080한테 보내는건데
- **User-Agent**: Mozilla/5.0 … => 어떤 브라우저에서 요청했는지
- **Accept**: text/html,application/xhtml+xml => 브라우저가 어떤 형식의 응답을 기대하고 있는지
=> text/html이 있다면, "나 HTML 받을 준비 되어있음"
- **Accept-Encoding**: gzip, deflate, br
- **Connection**: keep-alive

### 요청 객체

```sh
GET / HTTP/1.1
Host: localhost:8080
Connection: keep-alive
Cache-Control: max-age=0
sec-ch-ua: "Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
```

### 응답 객체


## 라우팅

우리가 serverSideRendering이라는 곳에서
작성한
`/`
`/users`
서버에서 들어온 요청 객체 => URL 정보에 따라서
알맞은 응답을 하는 것
`누가 "/"로 요청하면 메인페이지 보여줘`
`누가 "users"로 요청하면 유저 목록 보여줘.`