const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comment-list");

const createList = () => {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach((comment, i) => {
        const card = document.createElement("li");
        card.setAttribute("class", "card");
        card.setAttribute("data-userid", comment.userId);
        card.setAttribute("data-index", i);

        const cardTitle = document.createElement("a");
        cardTitle.setAttribute("href", `./view.html?userId=${comment.userId}&index=${i}`);
        cardTitle.textContent = `제목: ${comment.title}`;

        const cardDelete = document.createElement("span");
        cardDelete.setAttribute("class", "card-delete")
        cardDelete.textContent = "❌";

        const cardId = document.createElement("p");
        cardId.textContent = `ID: ${comment.userId}`;
        
        const cardContent = document.createElement("p");
        cardContent.textContent = `내용: ${comment.content}`;

        const cardDate = document.createElement("p");
        cardDate.textContent = `생성일: ${comment.date}`;

        commentList.appendChild(card);
        card.append(cardTitle, cardDelete, cardId, cardContent, cardDate);
    })
}

createList();
