const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get("userId");
const index = searchParams.get("index");

const commentsError = (comments) => {
    if (!comments) return `<p>글이 존재하지 않습니다.</p>`;
    if (!userId || !index) return `<p>해당 게시글이 존재하지 않습니다.</p>`;
    return true;
}

const commentViewRender = () => {
    const commentView = document.querySelector(".comment-view");
    const comments = JSON.parse(localStorage.getItem("comments"));
    const result = commentsError(comments);
    if (typeof result === 'string') return commentView.innerHTML = `${result}`

    const comment = comments[index];

    const userIdEl = document.createElement("li");
    const titleEl = document.createElement("li");
    const contentEl = document.createElement("li");
    const createdAtEl = document.createElement("li");
    const buttonInner = document.createElement("div")

    userIdEl.innerHTML = `
        <strong>유저 아이디</strong>
        <p>${comment.userId}</p>
    `;
    titleEl.innerHTML = `
        <strong>제목</strong> 
        <p>${comment.title}</p>
    `;
    contentEl.innerHTML = `
        <strong>내용</strong>
        <p>${comment.content}</p>
    `;
    createdAtEl.innerHTML = `
        <strong>작성일</strong>
        <p>${comment.createdAt.split("T")[0]}</p>
    `;

    buttonInner.setAttribute("class", "item-button");
    buttonInner.innerHTML = `
        <button type="button" onclick="window.location.href = './list.html'">댓글 목록</button>
        <button type="button" onclick="window.location.href = './update.html?userId=${comment.userId}&index=${index}'">댓글 수정</button>
    `

    commentView.append(userIdEl, titleEl, contentEl, createdAtEl, buttonInner);
}

commentViewRender();
