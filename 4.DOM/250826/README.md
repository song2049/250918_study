## 오늘은 뭘 배울까?

오늘은 **사용자의 입력을 받아 처리하고, 그걸 기반으로 동작을 만드는 구조**를 배웁니다.

특히, 아래 세 가지가 핵심입니다:

- `form`의 **기본 동작 막기** (`preventDefault`)
- 사용자 **입력값 수집** (`input.value`)
- **JSON + localStorage**를 활용한 데이터 저장

=> 즉, CRUD 중 **C(Create)와 R(Read)** 흐름을 직접 구현해봅니다.

## 오늘 수업의 핵심

- 실무에서 사용자 입력은 필수다 (로그인, 댓글, 검색창 등)
- 하지만 `<form>`은 기본적으로 **action 속성에 담긴 URL 페이지를 요청**한다
- 우리가 원하는 건 **바로 가는 요청이 아닌, 입력값만 받아서 처리 후 경로 처리**하는 것

핵심: **Create + Read 흐름을 몸으로 익히는 것**

---

## 오늘 수업의 목차

1. `form` 태그의 기본 동작

- `submit` 시 자동 새로고침 발생
- 이걸 막지 않으면 우리가 만든 자바스크립트는 바로 사라짐

2. `e.preventDefault()`로 기본 동작 막기

- 새로고침을 막고, 입력값만 가로채는 게 포인트

3. `input.value`로 값 가져오기

- 입력값을 자바스크립트로 받아오는 방법
- 예제: `userId`, `title`, `content`

4. `submit` 이벤트 등록 방식

- `form.addEventListener('submit', handler)`
- 왜 `click`이 아니라 `submit`에 걸어야 할까?

5. JSON의 개념과 활용

- JSON이란? → 객체를 문자열로 바꿔주는 포맷
- localStorage는 문자열만 저장 가능 → JSON이 필수

6. localStorage와 DOM 연결

- 데이터를 localStorage에 저장하고,
- 다시 꺼내서 `li`로 만들어 화면에 보여주기

7. 오늘의 흐름 전체 요약

```
form → submit → preventDefault
→ input.value → JSON.stringify
→ localStorage.setItem → 화면에 렌더링
```
