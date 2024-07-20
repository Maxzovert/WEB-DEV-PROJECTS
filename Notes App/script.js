const newNote = document.querySelector(".notes-Con");
const button = document.querySelector(".btn");

function showNotes() {
    newNote.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", newNote.innerHTML);
}

button.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    let save = document.createElement("button");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    save.className = "save";
    save.innerHTML = "Save";
    
    inputBox.appendChild(img);
    newNote.appendChild(inputBox);
    newNote.appendChild(save);

    save.addEventListener('click', function() {
        updateStorage();
    });

    updateStorage();
});

newNote.addEventListener('click', function(e) {
    if (e.target.tagName === "IMG") {
        const parentElement = e.target.parentElement;
        const saveButton = parentElement.nextElementSibling;
        parentElement.remove();
        if (saveButton && saveButton.className === "save") {
            saveButton.remove();
        }
        updateStorage();
    }
});
