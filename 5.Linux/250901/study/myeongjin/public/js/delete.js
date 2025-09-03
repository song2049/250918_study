function deleteComment(index){
  if(!confirm("ㄹㅇ 삭제?")) return;
  const comments = JSON.parse(localStorage.getItem("comments"))||[];
  comments.splice(index,1);
  localStorage.setItem("comments",JSON.stringify(comments));
  renderComments();
}
