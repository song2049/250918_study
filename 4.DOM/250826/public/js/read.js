const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comment-list");

const commentRender = () => {
    // 카드 그려줄거임!
    // 로컬 스토리지에 있는 값을 가져옴!
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    commentList.innerHTML = "";
    // <li class="card">
    //     <a class="card-title">제목입니다</a>
    //     <p>아이디: wnqudgus1234</p>
    //     <p>내용: 내용입니다.</p>
    // </li>
    comments.forEach((comment) => {
        const card = document.createElement("li");
        card.setAttribute("class", "card");

        const cardTitle = document.createElement("a");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.textContent = `제목 ${comment.title}`

        const userId = document.createElement("p");
        const content = document.createElement("p");

        userId.textContent = `아이디: ${comment.userId}`;
        content.textContent = `내용: ${comment.content}`

        commentList.appendChild(card);
        // 복수의 요소를 부모 요소에 꽂아넣는데, 편하게 쓰라고 씀.
        card.append(cardTitle, userId, content);
    })
}

commentRender();

// setAttribute: 속성을 만든다.
// card.setAttribute([속성이름], [속성값]);
// 내일 UD할 때를 대비해서 a태그 만드는데 href 넣진 않을게요 => 혼동할까봐.
