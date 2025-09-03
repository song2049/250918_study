# 우리는 현재 어떤 방식으로 컴퓨터를 다뤄왔는가?

- 컴퓨터 전원 버튼 누르고 (하드웨어)
- 폴더를 또는 VScode 아이콘 눌러서 실행

=> 눈에 보이는 화면을 통해 건들여서 작업

그렇다면, 우리가 배경 역사? 그런거 보다는 일단 한 번 해봅시다.
CLI는 어떻게 하는지

그러면 우리는 명령어를 입력해서 폴더 및 파일을 만들건데,  
우리의 명령을 `가져`와서 `해석`하는 또 하나의 프로그램이 필요합니다.

`cmd => 명령 프롬프트`


`C:\Users\KGA>`
얘가 뜻하는 것은 무엇이냐? => 내 C드라이브 => \users폴더 안에 => KGA (사용자)폴더에 위치

`dir`

우리의 목표는 `5.Linux`라는 폴더를 만들고 싶음.
어디에? 현재 수업 자료 폴더 안에.

그럴려면

`C:\Users\KGA>` 여기에서 경로 즉, 위치를 바꾸어주어야 함.

`경로`를 `바꾸`어 주어야 함.
=> `c`hange `d`irectory => cd [디렉토리]

```sh
cd Desktop
C:\Users\KGA\Desktop>
```

```sh
cd blockchain13
C:\Users\KGA\Desktop\blockchain13>
```

```sh
dir

C:\Users\KGA\Desktop\blockchain13>dir
 C 드라이브의 볼륨에는 이름이 없습니다.
 볼륨 일련 번호: 74FD-B396

 C:\Users\KGA\Desktop\blockchain13 디렉터리

2025-09-01  오전 06:38    <DIR>          .
2025-09-01  오전 06:38    <DIR>          ..
2025-08-11  오전 07:51    <DIR>          .vscode
2025-08-05  오전 09:21    <DIR>          1.HTML
2025-08-12  오전 07:05    <DIR>          2.CSS
2025-08-20  오후 05:21    <DIR>          3.JS
2025-09-01  오전 06:28    <DIR>          4.DOM
2025-09-01  오전 09:24    <DIR>          5.Linux
2025-08-11  오후 01:35    <DIR>          kouyil-clone
2025-08-08  오전 07:03    <DIR>          pair-coding
2025-08-08  오전 10:18    <DIR>          position
2025-08-08  오전 08:52    <DIR>          search

    0개 파일                   0 바이트
    12개 디렉터리  61,141,385,216 바이트 남음
```

자 그러면, 5.Linux는 GUI 형태로 만들어봤으니
이번에는 이틀 또는 3일 뒤 진행할

`6.git`폴더를 만들어보겠습니당.

`m`a`k`e `dir`ectory => mkdir [폴더이름]

`echo [출력할문장]`
`echo > index.html`

"왜 우리가 어떤 명령을 치거나 누르면, 컴퓨터가 알아서 반응할까?"

## 운영체제(OS)

사전적 의미: 모든 하드웨어와 소프트웨어를 관리하는 핵심 시스템

하드웨어: 손으로 만질 수 있는 것
소프트웨어: 손으로는 못 만지지만 `실행`할 수 있는 것

## 운영 체제 종류

- MS-DOS
- Window
- Linux
- UNIX

## UNIX

운영체제의 뿌리라고 저는 생각합니다.
텍스트 기반 CLI 시스템

`무료`가 아님

- 기업
- 정부 연구소
- 대학교

개인은 꿈도 못꾸지요....ㅠ

QDOS => MS-DOS => Window

## 리누스 토르발스

1991년
헬싱키 대학 다니던 대학생이었는데
당시에 MINIX

마! 그냥 내가 만들겠어!

=> Linux

리눅스는 나왔는데? 개발 친화적이라고 했는데....
초급자분들에게는 쉽지 않았대요.

2004년 남아공 기업가 마크 셔틀워스
=> 리눅스를 누구나 쉽게 쓸 수 있도록 하자!

우분투는 남아공 언어로  
`나는 우리가 있기에 존재한다`

=> Ubuntu

`CLI 친해지고 => 우분투 환경도 친해지자!`
=> 서버를 잘 알려면, 네트워크를 잘 알아야 한다.
=> 네트워크를 제어하려면 결국 보이지 않는 작업에 익숙해져야 한다.
=> 그래서 CLI => 우분투를 배웁니다.

그래서 사실, 리눅스의 배포판 우분투를 설치할건데
그 전에! WSL을 설치함

## WSL(Windows SubSystem for Linux)

`가상 머신`

window 운영체제는 메인에서 돌아가는데,  
리눅스 및 우분투를 돌릴라면, 가상 머신이 필요하다.

## WSL 활성화 및 Ubuntu 설치

사실, WSL은 안에 이미 있음!
근데, 지금은 비활성화 상태입니다.  
=> 유저가 가상 머신을 키는 경우는 잘 없기 때문에
그래서 켜주는 명령어부터 작성해볼게영

### 1단계: WSL 기능 켜기

먼저, WSL을 쓰려면 Windows 안에서 관련 기능을 켜야 합니다.
**관리자 권한 PowerShell**을 열고 다음 명령어를 실행하세요.

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

=> 실행이 끝나면 반드시 **컴퓨터를 재부팅**합니다.


## 2단계: WSL 기본 버전을 2로 설정

재부팅 후, 다시 PowerShell을 열고 입력합니다.

```
wsl --set-default-version 2
```

## 3단계: Ubuntu 설치

```
wsl --install -d Ubuntu
```

- `-- install`: 리눅스 배포판 설치하겠단 뜻.
- `-d ubuntu`: 설치할 배포판으로 Ubuntu를 지정 

그 전에 하나의 파일을 설치합니다.

`wsl_update_x64_msi`

WSL1, WSL2

WSL1버전을 활용했음.

이걸 설치해야 비로소

```
wsl --install -d Ubuntu
```

## 우분투 첫 걸음: 디렉토리 구조와 명령어

### 우분투 디렉토리 구조

```sh
cd /
```

```sh
ls
```

ls: list의 약자

- bin: 우리가 지금 사용하고 있는 기본 명령어 => 사실 이 명령어들도
실행 시킬 수 있는 단위에요 => 즉, 프로그램이란 뜻
=> `mkdir`, `cd`, `ls`, `cp` 같은 필수 도구들이 전부 여기에
들어있습니다.
=> `c`o`p`y => 파일이나 디렉토리 복사.
=> `cp [원본경로] [복사할대상경로]`
- mnt: 기본 운영 체제(Window)에 있는 C드라이브, D드라이브 같은 곳도 여기서 접근 가능
=> 즉, 외부 운영체제(우분투 입장에서는!), 다른 장치들에 접근할 수 있는 관문 정도

/dev, /home, /media, /var....

너무 많지만, 오늘은 CLI와 친해지길 바라죠?

`vi`(텍스트 에디터)

- 파일 열고 수정할 수 있는 편집기
- `vi index.html`: index.html 파일 열기

vi 안에서는 조금 독특한 명령어를 써야 합니다.

- i: 입력 모드
- ESC: 입력 모드 종료.
- :w : 저장
- :q : 종료 (저장이 안됨)
- :q! : 저장 안하고 강제 종료
- :wq! : 강제 저장 후 종료

오늘, 갑자기 뭐가 뭔지도 모르고 너무 많이 나갔슴니다.  
이게 뭐지....갑자기 뭔....리눅스, 우분투, 운영체제, CLI....

=> 하나만 기억하면 됩니당
=> CLI와 친해져야 합니다.

`mkdir`
`touch index.html`
`vi index.html`

```html
<html></html>...
```

그 다음, vscode내에서 서버 켜보고...

public/js/index.js

js파일 코드 작성해보고,