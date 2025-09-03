const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comment-list");

const commentRender = () => {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    // <li class="card">
    //     <a class="card-title">제목입니다</a>
    //     <span class="card-delete-btn">❌</span>
    //     <p>아이디: wnqudgus1234</p>
    //     <p>내용: 내용입니다.</p>
    // </li>
    comments.forEach((comment, i) => {
        const card = document.createElement("li");
        card.setAttribute("class", "card");
        // card.setAttribute("data-userid", comment.userId);
        card.setAttribute("data-index", i)

        const cardTitle = document.createElement("a");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.setAttribute("href", `./view.html?userId=${comment.userId}&index=${i}`)

        cardTitle.textContent = `제목 ${comment.title}`

        const cardDeleteBtn = document.createElement("span");
        cardDeleteBtn.setAttribute("class", "card-delete-btn");
        cardDeleteBtn.textContent = "❌";

        const userId = document.createElement("p");
        const content = document.createElement("p");

        userId.textContent = `아이디: ${comment.userId}`;
        content.textContent = `내용: ${comment.content}`

        commentList.appendChild(card);
        card.append(cardTitle, cardDeleteBtn, userId, content);
    })
}

commentRender();