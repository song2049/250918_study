const updateComment = (e) => {
    e.preventDefault();
    const updateCheak = confirm("이 내용으로 수정 하시겠습니까?")
    if(!updateCheak) return;

    comments[index].title = titleUpdate.value;
    comments[index].userId = idUpdate.value;
    comments[index].content = contentUpdate.value;

    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = "./list.html";
}

upDateInput.addEventListener("submit",updateComment);

const moveComment = () => {
    const moveChack = confirm("현재 댓글 목록으로 가면 수정하신 내용은 사라집니다.")
    if(!moveChack) return;
    window.location.href = './list.html'
}