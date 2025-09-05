const listpageInput = document.querySelector(".listpage-input");
console.log(listpageInput);

const create = (e) => {
    e.preventDefault();
    const date = new Date();
    const realtime = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
    const {name, content} = e.target;
    const list = {
        name: name.value,
        content: content.value,
        date: realtime
    }
    
    const lists = JSON.parse(localStorage.getItem("lists")) || [];
    lists.push(list);

    localStorage.setItem("lists", JSON.stringify(lists));
    window.location.href = "./list.html"
}

listpageInput.addEventListener("submit", create);