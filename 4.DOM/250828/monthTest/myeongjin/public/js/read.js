const commentList = document.querySelector(".comments-list");

const commentRender = () => {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    commentList.innerHTML = "";
    comments.forEach((comment, i) => {
        const card = document.createElement("li");
        card.setAttribute("class", "card");
        card.setAttribute("data-index", i)

        const cardTitle = document.createElement("a");
        cardTitle.setAttribute("class", "card-Title");
        cardTitle.setAttribute("href", `./view.html?userName=${comment.userName}&index=${i}`);    
        cardTitle.textContent = `제목 ${comment.title}`

        const cardDeleteBtn = document.createElement("span");
        cardDeleteBtn.setAttribute("class", "card-delete-btn");
        cardDeleteBtn.textContent = "❌";

        const userName = document.createElement("p");
        userName.textContent = `아이디: ${comment.userName}`;
        const content = document.createElement("p");
        content.textContent = `내용: ${comment.content}`;
        const createdAt = document.createElement("p");
        createdAt.textContent = `작성일: ${comment.createdAt}`;
      
        card.append(cardTitle, cardDeleteBtn, userName, content, createdAt);
        commentList.appendChild(card);
    });
}
commentRender();