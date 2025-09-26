let input = document.getElementById("user-input");
let list = document.getElementById("taskList");
let addBtn = document.getElementById("addbtn");

function addTask() {
    if (input.value.trim() === "") {
        return;
    }

    let text = input.value;


    let li = document.createElement("li");


    let span = document.createElement("span");
    span.innerText = text;


    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";


    let delBtn = document.createElement("button");
    delBtn.innerText = "X";

    span.onclick = function () {
        if (li.classList.contains("done")) {
            li.classList.remove("done");
            span.innerText = text;
        } else {
            li.classList.add("done");
            span.innerText = text + " (Completed)";
        }
    };

    editBtn.onclick = function () {
        let newText = prompt("Edit task:", text);
        if (newText && newText.trim() !== "") {
            text = newText;
            span.innerText = text;
            li.classList.remove("done");
        }
    };


    delBtn.onclick = function () {
        list.removeChild(li);
    };


    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);


    list.appendChild(li);

    input.value = "";
}

addBtn.onclick = addTask;

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); 
        addTask();
    }
});



