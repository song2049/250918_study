const selectBox = document.querySelector("#selectBox");

const renderQnas = () => {
    const qnas = JSON.parse(localStorage.getItem("qnas")) || [];
    if (!qnas.length) {
        selectBox.innerHTML = `<p>qnas가 없습니다</p>`;
        return;
    }

    qnas.map((value, index) => {
        const selectBoxItemEl = document.createElement("div");
        selectBoxItemEl.setAttribute("data-index", index);
        selectBoxItemEl.className = "select-box-item";

        const TitleEl = document.createElement("div");
        TitleEl.innerHTML = `
            <p>${value.title}</p>
            <img src="./public/img/down-arrow.png" class="view-button" alt="아랫쪽 이미지">
        `;

        const formEl = document.createElement("form");
        formEl.classList.add("item-form", "none");
        formEl.setAttribute("action", "./index.html");

        formEl.innerHTML = `
            <input type="text" placeholder="제목을 입력하세요">
            <textarea type="text" placeholder="내용을 입력하세요"></textarea>
            <button type="submit">작성</button>
        `;

        selectBox.appendChild(selectBoxItemEl);
        selectBoxItemEl.append(TitleEl, formEl);
    });
};


const viewitem = (e) => {
    if (!e.target.classList.contains("view-button")) return
    const form = e.target.parentNode.parentNode.querySelector(".item-form");
    if (form.classList.contains("none")) {
        form.classList.remove("none");
        form.classList.add("active");
        e.target.src = "./public/img/up-arrow.png";
        
    } else {
        form.classList.remove("active");
        form.classList.add("none");
        e.target.src = "./public/img/down-arrow.png";
    }
};

renderQnas();
selectBox.addEventListener("click", viewitem);

/*
    <div class="select-box-item">
        <div>
            <p>훈련 과정중에 지원 부담금이 있나요?</p>
            <p class="view-button">버튼</p>
        </div>
        <form action="./index.html" class="item-form none">
            <input type="text">
            <input type="text">
            <textarea type="text"></textarea>
            <button type="submit"></button>
        </form>
    </div>
*/