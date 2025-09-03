const mycomment = document.querySelector(".my_comment");
const deleteUpdateBtn = document.querySelector(".button_list");

const createMycom = () => {
    const seach = new URLSearchParams(location.search);
    const userId = seach.get(`userId`);
    const index = seach.get(`index`);
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = comments[index];

    if (!comment) {
        mycomment.innerHTML = '<p>해당 페이지를 찾을 수 없습니다.</p>';
        deleteUpdateBtn.innerHTML = " ";
    }
    else if (comment.userId === userId) {
        const myCard = document.createElement("li");
        myCard.innerHTML = `
        <p>제목</p> <p>${comment.title}</p>
        <p>ID</p> <p>${comment.userId}</p>
        <p>내용</p><p>${comment.content}</p>
        <p>생성일</p><p>${comment.date}</p>`;
        mycomment.appendChild(myCard);
    }
    else {
        mycomment.innerHTML = '<p>해당 페이지를 찾을 수 없습니다.</p>'
        deleteUpdateBtn.innerHTML = " ";
    }
}
createMycom();


