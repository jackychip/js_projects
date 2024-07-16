const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value === "") {
        alert("You must write something!");
        return;
    }

    let listElement = document.createElement("li");
    listElement.innerHTML = inputBox.value;
    listContainer.appendChild(listElement);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listElement.appendChild(span);

    inputBox.value = "";
    saveData();
}

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const loadData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

loadData();