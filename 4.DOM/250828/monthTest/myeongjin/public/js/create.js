const commentForm = document.querySelector(".comment-form");

const commentCreate = (e) => {
    e.preventDefault();

    const { userName, title, content } = e.target;
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    
    const today = `${year}-${month}-${day} ${hours}:${minutes}`;

    const comment = {
        userName: userName.value,
        title: title.value,
        content: content.value,
        createdAt: today
    };
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    window.location.href = "./list.html";
};
commentForm.addEventListener("submit", commentCreate);