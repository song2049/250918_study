const commentRender = () => {
    const commentList = document.querySelector(".comment-list");
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach((comment, i) => {
        const card = document.createElement("li");
        card.setAttribute("class", "card");
        card.setAttribute("data-index", i)

        const cardTitleEl = document.createElement("a");
        cardTitleEl.setAttribute("class", "card-title");
        cardTitleEl.setAttribute("href", `./view.html?userId=${comment.userId}&index=${i}`)

        cardTitleEl.textContent = `제목: ${comment.title}`

        const cardDeleteBtnEl = document.createElement("span");
        cardDeleteBtnEl.setAttribute("class", "card-delete-btn");
        cardDeleteBtnEl.textContent = "❌";

        const userIdEl = document.createElement("p");
        const contentEl = document.createElement("p");
        const createdAtEl = document.createElement("p");

        userIdEl.textContent = `아이디: ${comment.userId}`;
        contentEl.textContent = `내용: ${comment.content}`
        createdAtEl.textContent = `생성일: ${comment.createdAt.split("T")[0]}`

        commentList.appendChild(card);
        card.append(cardTitleEl, cardDeleteBtnEl, userIdEl, contentEl, createdAtEl);
    })
}

commentRender();