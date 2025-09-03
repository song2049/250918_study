const comments_create = (e) => {
    e.preventDefault();

    const inventory_today = get_today();
    const storage = JSON.parse(localStorage.getItem("storage")) || [];
    const { userid, title, board } = e.target;

    const storage_object = {
        USERID: userid.value,
        TITLE: title.value,
        BOARD: board.value,
        BOARD_DATE: inventory_today
    };
    storage.push(storage_object);
    localStorage.setItem("storage", JSON.stringify(storage));
    location.reload();
}

comments_form.addEventListener("submit", comments_create);