const params = new URLSearchParams(location.search);
const index = params.get("index");

const commentInfo = document.querySelector(".comment-info");
const comments = JSON.parse(localStorage.getItem("comments")) || [];
const comment = comments[index];

const titleInput = commentInfo.querySelector("textarea[name='title']");
const userNameInput = commentInfo.querySelector("textarea[name='userName']");
const contentInput = commentInfo.querySelector("textarea[name='content']");
const dayInput = commentInfo.querySelector("textarea[name='createdAt']");

if (comment) {
    titleInput.value = comment.title;
    userNameInput.value = comment.userName;
    contentInput.value = comment.content;
    dayInput.value = comment.createdAt;
} else {
    commentInfo.innerHTML = `
    <p>해당 게시글을 찾을 수 없습니다.</p>
    `
}

document.querySelectorAll("textarea").forEach((textarea) => {
    textarea.dataset.initial = textarea.value;
    textarea.addEventListener("focus", () => {
        if (textarea.value === textarea.dataset.initial) {
            textarea.value = "";
        }
    });
    textarea.addEventListener("blur", () => {
        if (textarea.value.trim() === "") {
            textarea.value = textarea.dataset.initial;
        }
    });
});