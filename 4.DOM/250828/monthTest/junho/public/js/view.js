// 콘솔 창

const params = new URLSearchParams(location.search);

const humanID = params.get("humanID");
const index = Number(params.get("index"));

const information = document.querySelector(".information")
const comments = JSON.parse(localStorage.getItem("comments")) || [];
const comment = comments[index];

const humanidInput = information.querySelector("input[name = 'humanID']");
const titleInput = information.querySelector("input[name = 'title']");
const detailTextarea = information.querySelector("textarea[name ='detail']");

if (comment && comment.humanID === humanID) {
    humanidInput.value = comment.humanID;
    titleInput.value = comment.title;
    detailTextarea.value = comment.detail;
}
