// [DB table(dbTableBoard) - board - column]
// 1. userId  
// 2. title   
// 3. content 
// 4. regiDate

//전역변수 설정
const request = new URLSearchParams(location.search);
const userId = request.get('userId');
const index = request.get('index');

// detail.js에서 가져옴
const updateInputUserId = document.querySelector("input[name='updateUserId']");
const updateInputTitle = document.querySelector("input[name='updateTitle']");
const updateInputContent = document.querySelector("textarea[name='updateContent']");
const updateInputRegiDate = document.querySelector("input[name='updateRegiDate']");

//화면 초기화
function initLayout() {


    const request = new URLSearchParams(location.search);
    const appKind = request.get("appKind");
    if (appKind != "update") return;
    // alert("수정페이지ㄱㄱ");
    const userId = request.get("userId");
    const index = request.get("index");

    //아이디는 수정불가
    updateInputUserId.readOnly = true; //아이디 수정불가
    updateInputTitle.readOnly = false;
    updateInputContent.readOnly = false;
    updateInputRegiDate.readOnly = true; //작성일 수정불가

    //DB조회 (localStorage)
    getDetail(userId, index);
}

//함수의 평가 단계에서 위로 끌어올려져서 호출 가능하므로 설계 흐름상 getDetail함수를 아래에 둠.
function getDetail(userId, index) {
    dbTableBoard = JSON.parse(localStorage.getItem("dbTableBoard")) || [];
    for (let i = 0; i < dbTableBoard.length; i++) {
        if (i == index && dbTableBoard[i].reUserId == userId) { //파라미터는 string 형태로 전달되었으므로...
            updateInputUserId.value = dbTableBoard[i].reUserId;
            updateInputTitle.value = dbTableBoard[i].reTitle;
            updateInputContent.value = dbTableBoard[i].reContent;
            updateInputRegiDate.value = dbTableBoard[i].reRegiDate;
            break;
        }
    }
    // console.log(dbTableBoard);
}

function saveData(e) {
    e.preventDefault();
    const btnType = e.submitter.value;
    if (btnType == "save") { //저장 버튼 클릭 시
        // dbTableBoard[i].reUserId = inputUserId.value //아이디는 수정하지 않는다.
        dbTableBoard[index].reTitle = updateInputTitle.value;
        dbTableBoard[index].reContent = updateInputContent.value;
        // dbTableBoard[i].reRegiDate = inputRegiDate.value; //작성일은 최초 작성일을 보존한다.

        //Validation
        let isValidTitle = (updateInputTitle.value.length < 3) ? false : true;
        let isValidContent = (updateInputContent.value.length < 10) ? false : true;
        if (!isValidTitle) {
            alert("제목을 3자 이상 입력하십시오.");
            return;
        }
        if (!isValidContent) {
            alert("내용을 10자 이상 입력하십시오.");
            return;
        }

        localStorage.setItem("dbTableBoard", JSON.stringify(dbTableBoard)); //update & commit;
        alert("수정된 내용으로 저장 되었습니다.");
        history.back();
    } else if (btnType == "cancel") { //취소 버튼 클릭 시
        alert("수정을 취소 하였습니다.");
        history.back(); //보안이슈로 최근에는 사용되지 않는 추세인 함수.
        // location.href = "./list.html";
    }
}
formBoard.addEventListener("submit", saveData); //저장버튼 콜백함수

initLayout();

