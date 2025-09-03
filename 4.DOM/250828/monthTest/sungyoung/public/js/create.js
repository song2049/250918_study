
const createLocal = (e) => {
    e.preventDefault();
    const {userId, title, content } = e.target;
    const realDate = new Date();
    const date = `${realDate.getFullYear()}/${realDate.getMonth()+1}/${realDate.getDate()}`
    const comment = {
        userId: userId.value,
        title: title.value,
        content: content.value,
        date: date
    }
    
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = "./list.html";
}

commentForm.addEventListener("submit", createLocal);
