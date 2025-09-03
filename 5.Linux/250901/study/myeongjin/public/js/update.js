const form = document.querySelector(".update-form");
const index = new URLSearchParams(location.search).get("index");
const comments = JSON.parse(localStorage.getItem("comments"))||[];
const c = comments[index];

if(c){
  form.userName.value=c.userName;
  form.title.value=c.title;
  form.content.value=c.content;
}

form.addEventListener("submit", e=>{
  e.preventDefault();
  comments[index]={ userName:form.userName.value, title:form.title.value, content:form.content.value, createdAt:c.createdAt };
  localStorage.setItem("comments",JSON.stringify(comments));
  window.location.href=`view.html?index=${index}`;
});
