const commentUpdate = (e) => {
    e.preventDefault();

    comments[index].title = titleInput.value;
    comments[index].content = contentInput.value;
    comments[index].userName = userNameInput.value;

    localStorage.setItem("comments", JSON.stringify(comments));

    window.location.href = "./list.html";
}
commentInfo.addEventListener("submit", commentUpdate);