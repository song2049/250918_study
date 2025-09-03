// 댓글 기능
const createComments = (event) => {
    event.preventDefault();
    
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const {humanID, title, detail} = event.target
    const comment ={
        humanID: humanID.value,
        title: title.value,
        detail: detail.value,
        date: new Date().toLocaleString()
    }
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = "./list.html"
}

listBox.addEventListener("submit", createComments)





