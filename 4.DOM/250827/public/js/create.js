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

commentForm.addEventListener("submit", commentCreate);
