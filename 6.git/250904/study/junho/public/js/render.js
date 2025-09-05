const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comment-list");

const commentRender = () => {
	const comments = JSON.parse(localStorage.getItem("comments")) || [];
	commentList.innerHTML = "";

	comments.forEach((comment) => {
		const card = document.createElement("li");
		card.setAttribute("class", "card");
		card.setAttribute("href", "https://google.com");

		const cardTitle = document.createElement("a")
		cardTitle.setAttribute("class", "card-title");
		cardTitle.innerHTML = `제목: ${comment.title}`

		const userID = document.createElement("p");
		const write = document.createElement("p");

		userID.innerHTML = `아이디: ${comment.userID}`;
		write.innerHTML = `내용: ${comment.write}`;

		commentList.appendChild(card);
		card.append(cardTitle, userID, write);
	})

}

commentRender();
