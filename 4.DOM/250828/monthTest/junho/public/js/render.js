const commentList = document.querySelector(".comment-list")  // ul
const listBox = document.querySelector(".list-box") // form


const commentRender = () => {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    comments.forEach((comment, i) => {  
        // li 요소
        const box = document.createElement("li");
        box.setAttribute("class", "box");
        box.setAttribute("data-index", i);

        // a 요소
        const boxTitle = document.createElement("a")
        boxTitle.setAttribute("class", "box-title");
        boxTitle.setAttribute("href", `./view.html?humanID=${comment.humanID}&index=${i}`);
        boxTitle.innerHTML = `제목:${comment.title}`;

        // span 요소
        const deleteButton = document.createElement("span");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerHTML = "❌"

        // p 요소
        const id = document.createElement("p");
        id.innerHTML = `아이디:${comment.humanID}`;
        const detail = document.createElement("p");
        detail.innerHTML = `내용:${comment.detail}`;
        const date = document.createElement("p");
        date.innerHTML = `작성일자:${comment.date}`; 


        commentList.appendChild(box);
        box.append(boxTitle, deleteButton, id, detail, date);
    });
}
commentRender();


