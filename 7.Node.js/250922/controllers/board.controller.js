// 요청이 들어오면, 그에 맞는 동작을 수행하고
// 결과를 만들어서 응답하는 공간

const boards = require("../data/board.data.js");
const path = require("path");

// 글 작성 폼 보여주는 함수
const getWrite = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/boards/write.html"));
}

// 글을 쓸 수 있는 함수
const postWrite = (req, res) => {
    const { user_id, title, content } = req.body;
    boards.push({
        user_id,
        title,
        content,
        id: boards.length + 1,
        writer: "송명진",
        hit: 0,
        created_at: "2025-09-19",
        updated_at: "2025-09-19"
    })
    res.redirect("/");
}
// params: URL 경로 안에 포함된 값을 받기 위한 방법 => 고유한 자원
const getView = (req, res) => {
    const { user_id } = req.params

    const board = boards.find((board) => board.user_id === user_id);
    
    res.render("boards/view.html", {
        board
    });
}

const deleteUserById = (req, res) => {
    const { user_id } = req.params;

    const index = boards.findIndex((board)=> board.user_id === user_id);

    if(index === -1) return res.status(404).json({ success: false, message: "게시글 못찾겠음!"})

    boards.splice(index, 1);
    return res.json({ success: true, message: "삭제 성공"});
}

module.exports = {
    getWrite,
    postWrite,
    getView,
    deleteUserById
}