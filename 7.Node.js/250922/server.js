const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const path = `${__dirname}/views/boards`;
// 아래 두개 추가
const boards = require("./data/board.data.js");
const boardRouter = require("./routes/board.route.js");

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "html");

nunjucks.configure("views", {
    express: app
})

app.get("/", (req, res) => {
    res.sendFile(`${path}/index.html`);
})

app.get("/boards", (req, res) => {
    res.render("boards/list.html", {
        boards
    })
})

app.use("/boards", boardRouter);

app.listen(3000, () => {
    console.log("서버가 실행되었습니다.");
})