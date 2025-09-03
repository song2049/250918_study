// [DB table(dbTableBoard) - board - column]
// 1. userId  
// 2. title   
// 3. content 
// 4. regiDate

//List화면에서 필요한 기능
//1. List 불러오기
//2. Create 화면으로 이동

//
function getList(){
    // alert("초기화면입니다.");
    const dbTableBoard = JSON.parse(localStorage.getItem("dbTableBoard")) || [];
    // alert(dbTableBoard[0].title);
    const tbody = document.querySelector('tbody');
    dbTableBoard.forEach((value, i) => {
        const tr = document.createElement("tr");
        const rowValues = [
            i, //data-index 역할
            dbTableBoard[i].title,
            dbTableBoard[i].userId,
            // dbTableBoard[i].content, //상세내용은 상세페이지에서 textarea로 확인하겠습니다.
            dbTableBoard[i].regiDate
        ]

        rowValues.forEach((rowValue,j) => {
            const td = document.createElement("td");
            if(j === 1){ //제목
                const aTag = document.createElement("a");
                aTag.innerText = rowValue;
                aTag.setAttribute("href",`./view.html?appKind=detail&userId=${value.userId}&index=${i}`);
                td.appendChild(aTag);
            }else{
                td.innerText = rowValue;
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    
}

//List 화면에서 Create 화면으로 이동
function goCreate(){
    location.href="./view.html?appKind=new";
};


// getList(); 