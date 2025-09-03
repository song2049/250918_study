const commentList = document.querySelector(".comment-list");

const commentDelete = (e) => {
    if(e.target.className !== "card-delete-btn") return;

    const confirmDelete = confirm("진짜 삭제할거야?");
    if(!confirmDelete) return;
    
    const index = e.target.parentNode.dataset.index;
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = "./list.html";
}

commentList.addEventListener("click", commentDelete);