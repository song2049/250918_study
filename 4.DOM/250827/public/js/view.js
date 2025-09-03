const requestParams = new URLSearchParams(location.search);
const userId = requestParams.get("userId");
const index = requestParams.get("index");

const commentInfo = document.querySelector(".comment-info");
const comments = JSON.parse(localStorage.getItem("comments"));
const comment = comments[index];

const titleInput = commentInfo.querySelector("input[name='title']");
const userIdInput = commentInfo.querySelector("input[name='userId']");
const contentInput = commentInfo.querySelector("input[name='content']");

if(!comment) commentInfo.innerHTML = `<p>글이 없는데요?</p>`;
else if(comment.userId === userId) {
    // 여기 로직 구현함
    titleInput.value = comment.title;
    userIdInput.value = comment.userId;
    contentInput.value = comment.content;
} else commentInfo.innerHTML = `<p>해당 게시글을 찾을 수 없습니다.</p>`;