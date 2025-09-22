// GET /boards/write 이 요청이 들어오면 특정 함수를 실행시켜라
// POST /boards/write 이 요청이 들어오면 특정 함수를 실행시켜라

const express = require("express");
// 외부에서 만든 => board.controller.js의 함수들을 불러와요.
const boardController = require("../controllers/board.controller.js");
// 라우터 객체
// URL별로 어떤 함수를 연결할지 정의합니다.
const router = express.Router();

router.get("/write", boardController.getWrite);
router.post("/write", boardController.postWrite);
// user_id = song2049
router.get("/view/:user_id", boardController.getView);
router.delete("/delete/:user_id", boardController.deleteUserById);

module.exports = router;