const listpageUl = document.querySelector(".listpage-ul");

const read = () => {
    const lists = JSON.parse(localStorage.getItem("lists")) || [];

    lists.forEach((list, i) => {
        const card = document.createElement("li");
        card.setAttribute("class", `card`);
        card.setAttribute("data-name", list.name);
        card.setAttribute("data-index", i);

        const cardName = document.createElement("p");
        cardName.textContent = `이름 [${list.name}]`;

        const cardContent = document.createElement("p");
        cardContent.textContent = `내용  [${list.content}]`;

        const cardDate = document.createElement("p");
        cardDate.textContent = `- ${list.date} -`;

        listpageUl.appendChild(card);
        card.append(cardName, cardContent, cardDate);

    })
}

read();