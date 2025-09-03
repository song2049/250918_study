const deleteComment = (event) => {
  if (event.target.className !== "delete-button") return;
  const confirmDeleteBtn = confirm("삭제하시겠습니까?");

  if (!confirmDeleteBtn) return;
  const index = event.target.parentNode.dataset.index;

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.splice(index, 1);
  localStorage.setItem("comments", JSON.stringify(comments));
  window.location.href = "./list.html"
}

commentList.addEventListener("click", deleteComment)

/*
  <li class = "box">
  <a class = "box-title">제목:</a>
  <span class = "delete-button">❌</span>
  <p>아이디: rhvhthch</p>
  <p>내용: 작성<p>
  </li>
  */


