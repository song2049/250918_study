const comments_form = document.querySelector(".comments-form");
const comments_list = document.querySelector(".comments-list");

const comments_read = () => {

  const storage = JSON.parse(localStorage.getItem("storage")) || [];
  storage.forEach((storage, i) => {
    const inventory = document.createElement("li");

    inventory.setAttribute("class", "inventory");
    inventory.setAttribute("inventory-userid", storage.USERID);
    inventory.setAttribute("inventory-index", i);

    const inventory_title = document.createElement("a");
    inventory_title.setAttribute("class", "inventory-title");
    inventory_title.setAttribute("href", `./view.html?userid=${storage.USERID}&index=${i}`);
    inventory_title.textContent = `제목: ${storage.TITLE}`;

    const inventory_delete = document.createElement("span");
    inventory_delete.setAttribute("class", "inventory-delete-button");
    inventory_delete.textContent = "❌";

    const inventory_id = document.createElement("p");
    inventory_id.textContent = `아이디: ${storage.USERID}`;
    const inventory_board = document.createElement("p");
    inventory_board.textContent = `내용: ${storage.BOARD}`;

    const inventory_date = document.createElement("p");
    inventory_date.textContent = `생성일: ${storage.BOARD_DATE}`;

    comments_list.appendChild(inventory);
    inventory.append(inventory_title, inventory_delete, inventory_id, inventory_board, inventory_date);
  })
}

comments_read();