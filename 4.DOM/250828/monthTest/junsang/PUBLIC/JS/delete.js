const comment_delete = (e) => {
    if (e.target.className !== "inventory-delete-button") { return; }

    const confirm_delete = confirm("삭제하시겠어요?");
    if (!confirm_delete) { return };

    const index = e.target.parentNode.dataset.index;
    const storage = JSON.parse(localStorage.getItem("storage")) || [];

    storage.splice(index, 1);
    localStorage.setItem("storage", JSON.stringify(storage));

    location.href = "./list.html";
}

comments_list.addEventListener("click", comment_delete);