let box = document.getElementById("content")
// console.log(box);
let btn = document.getElementsByClassName("container")[0]

function changeColor() {
    console.log("Running");
    box.style.backgroundColor = "yellow";
    if (box.style.backgroundColor === "yellow") {
        btn.style.backgroundColor = "green";
        btn.innerText = "Clicked"

    }
}