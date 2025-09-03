const commentForm = document.querySelector(".comment-form");

commentForm.addEventListener("submit", e=>{
  e.preventDefault();
  const f = e.target;
  const date = new Date();
  const comments = JSON.parse(localStorage.getItem("comments"))||[];
  comments.push({
    userName: f.userName.value,
    title: f.title.value,
    content: f.content.value,
    createdAt: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
  });
  localStorage.setItem("comments", JSON.stringify(comments));
  f.reset();
  renderComments();
});
