// <li class="card" data-index="wnqudgus">
    // <li>
    //     <a class="card-title">제목입니다</a>
    //     <span class="card-delete-btn">❌</span>
    //     <p>아이디: wnqudgus1234</p>
    //     <p>내용: 내용입니다.</p>
    // </li>
// </li>

// data-*: 사용자가 정의할 수 있는 속성
const commentDelete = (e) => {
    if(e.target.className !== "card-delete-btn") return;

    const confirmDelete = confirm("진짜 삭제할거야?");
    if(!confirmDelete) return;
    // 여기까지 도달했다면, e.target은 card-delete-btn임.
    // const userId = e.target.parentNode.dataset.userid;
    const index = e.target.parentNode.dataset.index;
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = "./list.html";
}

commentList.addEventListener("click", commentDelete);

/*
    for(let i = 0; i < comments.length; i++) {
        if(comments[i].userId === userId) {
            comments.splice(index, 1);
            break;
        }
    }
*/