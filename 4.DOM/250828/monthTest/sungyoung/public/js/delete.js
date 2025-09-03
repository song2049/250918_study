const cardDeleteBtn = document.querySelector(".card-delete");
const deleteBtn = (e) => {
    if(e.target.className !== "card-delete") return;
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const userId = e.target.parentNode.dataset.userid;
    const index = e.target.parentNode.dataset.index;

    const deleteCheck = confirm(`${Number(index) + 1}번째 댓글을 삭제 하시겠습니까?`);
    if(!deleteCheck) return;
    

    for(let i = 0; i < comments.length; i++) {
        if(comments[i].userId === userId ) {
            comments.splice(index, 1)
            break;
        }

    }
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = `./list.html`;
}

commentList.addEventListener("click", deleteBtn);
