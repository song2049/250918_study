const moveUpdate = () => {
    const seach = new URLSearchParams(location.search);
    const index = seach.get(`index`);
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = comments[index];

    window.location.href = `./update.html?userId=${comment.userId}&index=${index}`
}

const moveComment = () => {
    window.location.href = './list.html'
}