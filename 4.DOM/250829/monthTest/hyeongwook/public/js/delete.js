// [DB table(dbTableBoard) - board - column]
// 1. reUserId  
// 2. reTitle   
// 3. reContent 
// 4. reRegiDate

function deleteReply(pIndex, pUserId){
    // alert(`userId=${pUserId}`);
    // alert(`index=${pIndex}`);
    
    if(!confirm('정말 삭제하시겠습니까?')) return;
    const dbTableBoard = JSON.parse(localStorage.getItem("dbTableBoard")) || [];
    try {
        console.log(dbTableBoard);
        for (let i = 0; i < dbTableBoard.length; i++) {
            // alert(pIndex);
            if(i == pIndex && dbTableBoard[i].reUserId == pUserId) { 
                dbTableBoard.splice(i,1);
                console.log(dbTableBoard);
                break;
            }
        }
    } catch (error) {
        alert("삭제중 오류가 발생하였습니다.");
        console.log(error);
    }

    localStorage.setItem("dbTableBoard", JSON.stringify(dbTableBoard));
    location.reload();
}