const search = location.search;
const userID = search.split("&")[0].split("=")[1]
const index = search.split("=")[2];
const comment_detail_info = document.querySelector(".comment-detail-info");

const storage = JSON.parse(localStorage.getItem("storage"));
const comment = storage[index];

const input_title = comment_detail_info.querySelector("input[name='title']");
const input_userid = comment_detail_info.querySelector("input[name='userid']");
const input_board = comment_detail_info.querySelector("textarea[name='board']");

if (comment.USERID === userID) {
    input_title.value = comment.TITLE;
    input_userid.value = comment.USERID;
    input_board.value = comment.BOARD;
}
else { comment_detail_info.innerHTML = `<p>게시글이 없어요</p>` }

const comment_update = (e) => {
    e.preventDefault();

    storage[index].TITLE = input_title.value;
    storage[index].BOARD = input_userid.value;
    storage[index].USERID = input_board.value;

    localStorage.setItem("storage", JSON.stringify(storage));
    location.href = "./list.html"
}

comment_detail_info.addEventListener("submit", comment_update);