const detailBox = document.querySelector(".comment-detail");
const updateBtn = document.querySelector(".update-btn");
const index = new URLSearchParams(location.search).get("index");
const comments = JSON.parse(localStorage.getItem("comments"))||[];
const c = comments[index];

if(c) detailBox.innerHTML=`제목<h2>${c.title}</h2>아이디<p>${c.userName}</p>내용<p>${c.content}</p>작성일: <small>${c.createdAt}</small>`;

updateBtn.addEventListener("click",()=>window.location.href=`update.html?index=${index}`);
