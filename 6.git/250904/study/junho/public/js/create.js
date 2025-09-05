const commentCreate = (e) => {
	e.preventDefault();

	const {userID, title, write} = e.target
	const comments = JSON.parse(localStorage.getItem("comments")) || [];

	const comment = {
		userID: userID.value,
		title: title.value,
		write: write.value
	}
	comments.push(comment);

	localStorage.setItem("comments", JSON.stringify(comments));
	window.location.href = "./index.html"
}

	commentForm.addEventListener("submit", commentCreate);
