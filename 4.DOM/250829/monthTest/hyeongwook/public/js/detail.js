// [DB table(dbTableBoard) - board - column]
// 1. reUserId  
// 2. reTitle   
// 3. reContent 
// 4. reRegiDate
const inputUserId = document.querySelector("input[name='userId']");
const inputTitle = document.querySelector("input[name='title']");
const inputContent = document.querySelector("textarea[name='content']");

const dbTableBoard = JSON.parse(localStorage.getItem("dbTableBoard")) || [];


// initLayout 함수에서 getDetail을 호출하므로 코드 순서상 위로 올리는게 맞지만 
// 평가 단계에서 미리 정의되므로 화면 코드가독성을 위해 초기설정 함수를 최상단에 위치시킴
//Board : Sample Data
function getBoardDetail(index) {
    // const dbTableBoard = JSON.parse(localStorage.getItem("dbTableBoard")) || [];
    if (index == '1') {
        inputUserId.value = "student1";
        inputTitle.value = "강의실 위치는 어디인가요?"
        inputContent.value = "건물은 어디인지 알겠는데 3층도 있고 4층도 있네요..\n정확히 어디죠?"
    } else if (index == '2') {
        inputUserId.value = "student1";
        inputTitle.value = "강의실 내부 냉방은 잘 되나요?"
        inputContent.value = "요즘 날씨가 많이 더운데 냉방은 잘되나요?"
    }
}



//댓글 불러오기
function getReplyDetail(index) {

    //댓글 Load
    const formReply = document.querySelector("form[name='formReply']");
    dbTableBoard.forEach((rowValue, i) => {

        const readReplyData = document.createElement("div");
        readReplyData.className = "replyCard";
        // 1. reUserId  
        // 2. reTitle   
        // 3. reContent 
        // 4. reRegiDate
        const rowValues = [
            i, //data-index 역할
            rowValue.reUserId,
            rowValue.reTitle,
            rowValue.reContent,
            rowValue.reRegiDate
        ]

        rowValues.forEach((rowValue, j) => {
            const p = document.createElement("p");
            // alert(rowValue)
            if (j === 1) { //title
                p.innerHTML = "<label>작성자</label>" + "<span>" + rowValue + "</span>";
                const aTagUpdate = document.createElement("a");
                aTagUpdate.innerText = "❌댓글삭제";
                aTagUpdate.setAttribute("href", "#");
                aTagUpdate.setAttribute("onclick", `deleteReply('${i}','${rowValue}')`);
                p.appendChild(aTagUpdate);

                const aTag = document.createElement("a");
                aTag.innerText = "✏️댓글수정";
                aTag.setAttribute("href", `./update.html?appKind=update&userId=${rowValue}&index=${i}`);
                p.appendChild(aTag);


                readReplyData.appendChild(p);
            } else if (j === 2) {
                p.innerHTML = "<label>제목</label>" + "<span>" + rowValue + "</span>";
                readReplyData.appendChild(p);
            } else if (j === 3) {
                p.innerHTML = `<label>내용</label><textarea>${rowValue}</textarea>`;
                readReplyData.appendChild(p);
            } else if (j === 4) {
                p.innerHTML = `<label>작성일</label><span>${rowValue}</span>`;
                readReplyData.appendChild(p);
            }


        });
        formReply.appendChild(readReplyData);
    });
}


function initLayout() {
    const request = new URLSearchParams(location.search);
    const appKind = request.get("appKind");
    if (appKind != "detail") return;

    const userId = request.get("userId");
    const index = request.get("index");
    const title = document.querySelector("h1");

    title.innerHTML = "Q & A - 상세조회";

    //상세조회 화면이므로 수정불가
    inputUserId.readOnly = true;
    inputTitle.readOnly = true;
    inputContent.readOnly = true;


    //저장버튼 숨김처리
    const btnSave = document.querySelector("button[value='save']");
    const btnUpdate = document.querySelector("button[value='update']");
    // btnSave.style.display = 'none';
    btnUpdate.style.display = 'none';
    // btnSave.style.visibility = 'hidden'; 이렇게 숨김처리 하면 레이아웃이 틀어짐

    getBoardDetail(index); //게시판 내용 불러오기 (sample)
    getReplyDetail(index); //댓글 내용 불러오기 (localStorage)
}

initLayout();