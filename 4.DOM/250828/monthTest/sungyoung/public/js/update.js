const seach = new URLSearchParams(location.search);
const userId = seach.get(`userId`);
const index = seach.get(`index`);

const upDateInput = document.querySelector(".update-input");


const comments = JSON.parse(localStorage.getItem("comments")) || [];
const comment = comments[index];

const idUpdate = upDateInput.querySelector("input[name='userId']");
const titleUpdate = upDateInput.querySelector("input[name='title']");
const contentUpdate = upDateInput.querySelector("textarea[name='content']");

idUpdate.value = comment.userId;
titleUpdate.value = comment.title;
contentUpdate.value = comment.content;


