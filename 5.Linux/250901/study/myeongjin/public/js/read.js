const commentList = document.querySelector(".comments-list");

function renderComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  commentList.innerHTML = "";

  comments.forEach((c,i)=>{
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="view.html?index=${i}">${c.title}</a>
      <span>(아이디: ${c.userName})</span>
      <p>${c.content}</p><br>
      <small>작성일: ${c.createdAt}</small>
      <button onclick="deleteComment(${i})">삭제</button>`;
    commentList.appendChild(li);
  });
}

renderComments();
