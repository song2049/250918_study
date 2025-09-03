const createUpdate = (event) => {
    event.preventDefault();
    
    // URL index 확인
    comments[index].humanID = humanidInput.value
    comments[index].title = titleInput.value
    comments[index].detail = detailTextarea.value

    localStorage.setItem("comments", JSON.stringify(comments))
    window.location.href = "./list.html"
}

information.addEventListener("submit", createUpdate);