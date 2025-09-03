// const comments => 위에 이미 값이 있죠?
// commentInfo => 위에 이미 값이 있습니다.

const commentUpdate = (e) => {
    e.preventDefault();

    comments[index].title = titleInput.value;
    comments[index].content = contentInput.value;
    comments[index].userId = userIdInput.value;

    localStorage.setItem("comments", JSON.stringify(comments));

    window.location.href = "./list.html";
}

commentInfo.addEventListener("submit", commentUpdate);

/*
        if(contentInput.value.length < 10) {
        alert("안돼!")
        return;
    }
    
*/