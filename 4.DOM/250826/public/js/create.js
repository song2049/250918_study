// const comments = [];
const commentCreate = (e) => {
    const { userId, title, content } = e.target
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    const comment = {
        userId: userId.value,
        title: title.value,
        content: content.value
    }
    comments.push(comment);

    localStorage.setItem("comments", JSON.stringify(comments));
}

// const userId = e.target.userId
// const title = e.target.title
// const content = e.target.content
// 구조 분해 할당
// addEventListener 내부에는 우리가 던진 함수(콜백)를 실행시킴 => 특정 이벤트가 발생했을 때.
commentForm.addEventListener("submit", commentCreate);

// 여기에서? 배열이 당연히! list.html 경로 이동하면? 브라우저는 다시 요청할 수 밖에없다
// => 평가와 실행 진행 => 당연히 빈 배열이다.
// => 결국 어딘가에 저장 공간이 필요하다.
// localStorage: 브라우저의 임시 저장 공간
// => 저장하기 위한 데이터 구조가 필요하다
// => JSON

/*
    JSON이란?

    Javascript Object Notation

    자바스크립트 객체와 비슷하게 생긴 데이터 표현 방식.
    => 주의할 점은 문자열로 구성된 포맷
*/


    // 브라우저에 comments 키로 있는지 체크 없으면? 빈 배열 할당
    // console.log(localStorage.getItem("comments"));
    // console.log(JSON.parse(localStorage.getItem("comments")));
    /*
        {
            "userId" : "wnqudgus",
            "title": "제목",
            "content": "오늘 머리 안아픔"
        }
    */