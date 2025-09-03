const commentForm = document.querySelector(".comment-form");

const commentCreate = (e) => {
    e.preventDefault();
    const { userId, title, content } = e.target
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    const comment = {
        userId: userId.value,
        title: title.value,
        content: content.value,
        createdAt: new Date()
    }
    comments.push(comment);

    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = "./list.html"
}

commentForm.addEventListener("submit", commentCreate);
