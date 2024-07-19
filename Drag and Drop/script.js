const listItems = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

for (let list of listItems) {
    list.addEventListener("dragstart", (event) => {
        let selected = event.target;

        leftBox.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        leftBox.addEventListener("drop", (event) => {
            leftBox.appendChild(selected);
            selected = null;
        });

        rightBox.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        rightBox.addEventListener("drop", (event) => {
            rightBox.appendChild(selected);
            selected = null;
        });
    });
}